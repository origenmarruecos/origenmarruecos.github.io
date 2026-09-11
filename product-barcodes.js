/*
  ORIGEN MARRUECOS · EAN/GTIN verificados
  Auditoría: 11/09/2026

  Esta capa centraliza los códigos que pueden vincularse de forma inequívoca a una
  ficha concreta. Se carga después de los ficheros de datos y antes de app.js y
  scanner.js, de modo que toda la aplicación trabaja con el mismo EAN/GTIN.

  No se asignan códigos por inferencia a fichas genéricas, vigilancia estacional o
  frescos cuando el código puede depender de proveedor, formato o lote.
*/
(() => {
  const verified = {
    // Alcampo / marcas comercializadas en Alcampo
    'alcampo-calvo-sardinas': { gtin:'8410090441270', basis:'Ficha comercial / catálogo Calvo' },
    'alcampo-belmonte-msc': { gtin:'3175690011005', basis:'Ficha oficial Alcampo' },
    'alcampo-belmonte-gourmet': { gtin:'3175690011036', basis:'Ficha oficial Alcampo' },
    'alcampo-belmonte-23': { gtin:'3175690111729', basis:'Ficha oficial Alcampo' },
    'alcampo-belmonte-gildas': { gtin:'3175690152203', basis:'Ficha oficial Alcampo' },
    'alcampo-belmonte-tapitas': { gtin:'3262960099020', basis:'Ficha oficial Alcampo' },
    'alcampo-calvo-girasol': { gtin:'8410090410412', basis:'Ficha oficial Alcampo' },
    'alcampo-calvo-oliva-baja-sal': { gtin:'8410090450128', basis:'Catálogo Calvo' },
    'alcampo-calvo-sardinillas-baja-sal': { gtin:'8410090454560', basis:'Catálogo Calvo / ficha comercial' },
    'alcampo-belmonte-banderillas': { gtin:'3262960391605', basis:'Ficha oficial Alcampo / ficha comercial' },
    'alcampo-vanelli-anchoa': { gtin:'6111239500545', basis:'Ficha oficial Alcampo' },
    'alcampo-cuca-sardinas': { gtin:'8410698072722', basis:'Ficha comercial del producto' },

    // Carrefour
    'carrefour-tapita': { gtin:'3262960099020', basis:'Misma referencia Belmonte Gourmet 300 g documentada en Alcampo' },

    // Mercadona
    'mercadona-mix-frutos-rojos': { gtin:'8480000610898', basis:'Código ya documentado en la ficha' },
    'mercadona-1897-lata': { gtin:'8480000047670', basis:'Código ya documentado en la ficha' },
    'mercadona-anchoa-girasol-tripack': { gtin:'8480000184139', basis:'Código ya documentado en la ficha' },
    'mercadona-anchoa-oliva-42': { gtin:'8480000184023', basis:'Código ya documentado en la ficha' },
    'mercadona-boquerones-alinados': { gtin:'8402001013553', basis:'Código ya documentado en la ficha' },
    'mercadona-boquerones-vinagre': { gtin:'8480000804051', basis:'Ficha de etiquetado / base alimentaria' },
    'mercadona-alcaparras': { gtin:'8480000331908', basis:'Ficha de producto con EAN explícito' },
    'mercadona-arandanos-ultracong': { gtin:'8480000610935', basis:'Ficha de producto con EAN explícito' },
    'mercadona-fresas-ultracong': { gtin:'8480000610928', basis:'Ficha de producto con EAN explícito' },

    // Lidl
    'lidl-nixe-sardinas-girasol': { gtin:'20041663', basis:'Ficha de producto Nixe / Lidl' },

    // DIA
    'dia-calvo-sardinillas-baja-sal': { gtin:'8410090454560', basis:'Misma referencia Calvo 60 g documentada en catálogo del fabricante' }
  };

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
      'alcampo-sardinas-girasol',
      'alcampo-sardinas-oliva',
      'alcampo-sardinas-baja-sal',
      'carrefour-caracol',
      'carrefour-ramiflor',
      'carrefour-elmenu',
      'alcampo-aceite',
      'alcampo-noras',
      'alcampo-pescadona-pulpo',
      'dia-alcaparras',
      'dia-ubago-sardinas-oliva',
      'lidl-nixe-sardinas-oliva',
      'mercadona-1897-pack6',
      'mercadona-anchoa-oliva-74',
      'mercadona-anchoa-oliva-pack3'
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
    date: '11/09/2026',
    totalFiches: rows.length,
    verifiedFiches: Object.keys(verified).filter(id => byId.has(id)).length,
    unresolved,
    verified
  };
})();
