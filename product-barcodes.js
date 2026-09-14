/*
  ORIGEN MARRUECOS · EAN/GTIN verificados
  Auditoría: 14/09/2026

  Fuente única de verdad para los códigos de barras del archivo. Esta capa se carga
  después de los ficheros de datos y antes de app.js y scanner.js, y asigna el GTIN
  a la ficha exacta antes de que el escáner empiece a trabajar.

  Criterio de la auditoría:
  - sólo se incorpora un EAN/GTIN cuando puede vincularse a la referencia y formato
    concretos de la ficha;
  - no se trasladan códigos entre formatos (unidad/multipack, pesos distintos, etc.);
  - no se asignan códigos por inferencia a frescos, fichas genéricas o referencias de
    vigilancia cuando proveedor, formato o lote pueden cambiar;
  - todos los códigos incorporados superan la validación del dígito de control GS1.
*/
(() => {
  const verified = {
    // Alcampo / marcas comercializadas en Alcampo
    'alcampo-sardinas-girasol': { gtin:'8410155004273', basis:'Referencia Auchan/Alcampo 120(84) g; EAN publicado por Auchan y correspondencia de formato, ingredientes y valores nutricionales con la ficha oficial Alcampo' },
    'alcampo-sardinas-oliva': { gtin:'8410155004280', basis:'Referencia Auchan/Alcampo 120(84) g; EAN publicado por Auchan y correspondencia de formato, ingredientes y valores nutricionales con la ficha oficial Alcampo' },
    'alcampo-calvo-sardinas': { gtin:'8410090441270', basis:'GTIN del fabricante Calvo para sardinas en aceite de oliva 120/84 g; misma referencia comercializada por Alcampo' },
    'alcampo-belmonte-msc': { gtin:'3175690011005', basis:'Ficha oficial Alcampo de la referencia Belmonte Gourmet MSC 60 g' },
    'alcampo-belmonte-gourmet': { gtin:'3175690011036', basis:'Ficha oficial Alcampo de la referencia Belmonte Gourmet 60 g' },
    'alcampo-belmonte-23': { gtin:'3175690111729', basis:'Ficha oficial Alcampo de la referencia Belmonte 23 g' },
    'alcampo-belmonte-gildas': { gtin:'3175690152203', basis:'Ficha oficial Alcampo de Gildas Belmonte 5 uds / 80 g escurridos' },
    'alcampo-belmonte-tapitas': { gtin:'3262960099020', basis:'Ficha oficial Alcampo de Tapitas Marineras Belmonte 300 g' },
    'alcampo-calvo-girasol': { gtin:'8410090410412', basis:'Ficha oficial Alcampo de sardinas Calvo en aceite de girasol 84 g' },
    'alcampo-calvo-oliva-baja-sal': { gtin:'8410090450128', basis:'Catálogo Calvo 2026: sardinas en aceite de oliva bajo en sal 120/84 g' },
    'alcampo-calvo-sardinillas-baja-sal': { gtin:'8410090454560', basis:'Catálogo Calvo 2026 y ficha comercial: sardinillas bajo en sal 90/60 g' },
    'alcampo-belmonte-banderillas': { gtin:'3262960391605', basis:'Ficha oficial Alcampo y ficha Hipercor de Banderillas Belmonte 160 g escurridos' },
    'alcampo-vanelli-anchoa': { gtin:'6111239500545', basis:'EAN registrado en la ficha oficial Alcampo durante la auditoría previa; referencia retirada/no localizable actualmente. Se conserva el código ya documentado, con dígito de control válido' },
    'alcampo-cuca-sardinas': { gtin:'8410698072722', basis:'Referencia CUCA sardinas en aceite de oliva 85 g verificada en catálogo comercial' },

    // Carrefour
    'carrefour-tapita': { gtin:'3262960099020', basis:'Misma referencia Belmonte Tapita Marinera Mediterránea 300 g documentada con este EAN en Alcampo' },

    // Mercadona
    'mercadona-mix-frutos-rojos': { gtin:'8480000610898', basis:'Ficha de catálogo Mercadona monitorizada: Mix de frutos rojos Hacendado 300 g, EAN explícito' },
    'mercadona-1897-lata': { gtin:'8480000047670', basis:'Ficha comercial de Cerveza doble malta 1897 lata 0,33 l, EAN explícito' },
    'mercadona-anchoa-girasol-tripack': { gtin:'8480000184078', basis:'Hacendado anchoa en aceite de girasol, 87 g escurridos / pack 3; EAN verificado en ficha de producto. Corrige el antiguo 8480000184139, que no correspondía de forma verificable a esta referencia' },
    'mercadona-anchoa-oliva-42': { gtin:'8480000184337', basis:'Hacendado filetes de anchoa en aceite de oliva 42 g; EAN y formato verificados en ficha de producto. Corrige 8480000184023, que corresponde a la bandeja de 140 g' },
    'mercadona-anchoa-oliva-pack3': { gtin:'8480000184085', basis:'Hacendado filetes de anchoa en aceite de oliva pack 3 / 120 g; EAN verificado para el formato exacto' },
    'mercadona-anchoa-oliva-74': { gtin:'8480000804181', basis:'Hacendado filetes de anchoa en aceite de oliva 74 g; EAN verificado para el formato exacto' },
    'mercadona-boquerones-alinados': { gtin:'8402001013553', basis:'Hacendado boquerones aliñados 80 g; EAN documentado para la referencia exacta' },
    'mercadona-boquerones-vinagre': { gtin:'8480000804051', basis:'Hacendado boquerones al vinagre en aceite de girasol 80 g; EAN verificado en ficha de producto' },
    'mercadona-alcaparras': { gtin:'8480000331908', basis:'Hacendado alcaparras en vinagre 135 g; EAN verificado en ficha de producto' },
    'mercadona-arandanos-ultracong': { gtin:'8480000610935', basis:'Hacendado arándanos enteros ultracongelados 300 g; EAN verificado en ficha de producto' },
    'mercadona-fresas-ultracong': { gtin:'8480000610928', basis:'Hacendado fresas enteras ultracongeladas 300 g; EAN verificado en ficha de producto' },
    'mercadona-sardinas-oliva': { gtin:'8480000182524', basis:'Hacendado sardinas en aceite de oliva; EAN ya documentado en la ficha y contrastado en base de producto' },

    // Lidl
    'lidl-nixe-sardinas-girasol': { gtin:'20041663', basis:'Nixe sardinas en aceite de girasol; EAN de la lata individual documentado en bases de etiquetado y asociado a la referencia vendida por Lidl' },
    'lidl-nixe-sardinas-oliva': { gtin:'20046217', basis:'Nixe sardinas en aceite de oliva; EAN de la lata individual 125 g verificado en varias bases de etiquetado. La ficha española se comercializa en pack 2 x 125 g' },

    // DIA
    'dia-calvo-sardinillas-baja-sal': { gtin:'8410090454560', basis:'Misma referencia Calvo sardinillas en aceite de oliva bajo en sal 90/60 g; GTIN verificado en catálogo del fabricante y ficha comercial' }
  };

  // Fichas a las que NO se les asigna un código porque no existe una vinculación
  // pública suficientemente sólida con el SKU concreto. La ausencia aquí es deliberada.
  const unresolved = {
    generic_or_watch: [
      'mercadona-anchoas',
      'mercadona-cherry',
      'lidl-tomate-cherry',
      'lidl-pimiento-watch',
      'lidl-frutos-rojos-watch'
    ],
    fresh_or_lot_dependent: [
      'alcampo-fresones',
      'mercadona-judia',
      'mercadona-frambuesas',
      'mercadona-arandanos',
      'mercadona-uva-blanca',
      'mercadona-judia-redonda',
      'alcampo-perejil-bio',
      'alcampo-eneldo-bio',
      'alcampo-estragon-bio',
      'aldi-aguacate',
      'aldi-judia',
      'aldi-judia-verde-plana',
      'aldi-frambuesas',
      'aldi-pimientos-mini',
      'lidl-judia-plana',
      'lidl-aguacate-eco',
      'aldi-arandanos-125'
    ],
    exact_sku_gtin_not_publicly_verified: [
      'alcampo-romero',
      'alcampo-sardinas-baja-sal',
      'carrefour-caracol',
      'carrefour-ramiflor',
      'carrefour-elmenu',
      'alcampo-aceite',
      'alcampo-noras',
      'alcampo-pescadona-pulpo',
      'dia-alcaparras',
      'dia-ubago-sardinas-oliva',
      'mercadona-1897-pack6'
    ]
  };

  const rows = Array.isArray(window.data) ? window.data : [];
  const byId = new Map(rows.map(row => [row.id, row]));

  Object.entries(verified).forEach(([id, meta]) => {
    const row = byId.get(id);
    if (!row) return;
    row.barcode = meta.gtin;
  });

  window.OM_PRODUCT_BARCODES = Object.fromEntries(
    Object.entries(verified).map(([id, meta]) => [id, meta.gtin])
  );
  window.OM_BARCODE_AUDIT = {
    date: '14/09/2026',
    totalFiches: rows.length,
    verifiedFiches: Object.keys(verified).filter(id => byId.has(id)).length,
    unresolvedFiches: Object.values(unresolved).flat().filter(id => byId.has(id)).length,
    unresolved,
    verified
  };
})();
