/*
  EAN/GTIN verificados directamente por ORIGEN MARRUECOS.
  Esta tabla tendrá prioridad sobre cualquier base externa.
  Iremos añadiendo códigos a medida que comprobemos etiquetas y fuentes.
*/
window.OM_VERIFIED_BARCODES = window.OM_VERIFIED_BARCODES || {};

/* Altas documentadas 10/09/2026. Se cargan antes de app.js para que los contadores
   reflejen automáticamente el número real de fichas del archivo. */
window.data = window.data || [];
window.data.push(...[
  {
    id:"mercadona-mix-frutos-rojos",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Mix de frutos rojos ultracongelados 300 g",
    category:"Fruta congelada",
    status:"confirmed",
    evidence:"Origen: Marruecos",
    note:"La ficha de catálogo monitorizada para Mercadona identifica Marruecos como origen del producto. EAN 8480000610898. En producto congelado conviene seguir revisando futuras actualizaciones del etiquetado.",
    source:"Tribbal · datos de catálogo Mercadona",
    url:"https://mercadona.tribbal.net/articulo/61089?prov=Segovia",
    checked:"10/09/2026",
    barcode:"8480000610898",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-1897-lata",
    chain:"Mercadona",
    brand:"1897",
    product:"Cerveza doble malta 1897 0,33 l",
    category:"Cerveza",
    status:"confirmed",
    evidence:"Origen: Marruecos",
    note:"Referencia actual de Mercadona. La ficha de catálogo declara Marruecos como origen. EAN 8480000047670.",
    source:"RadarSuper · datos de catálogo Mercadona",
    url:"https://radarsuper.com/mercadona/p/cerveza-doble-malta-lata",
    checked:"10/09/2026",
    barcode:"8480000047670",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-1897-pack6",
    chain:"Mercadona",
    brand:"1897",
    product:"Cerveza doble malta 1897 pack 6 × 33 cl",
    category:"Cerveza",
    status:"confirmed",
    evidence:"Origen: Marruecos",
    note:"Formato multipack de la referencia 1897. La ficha actual de catálogo declara Marruecos como origen.",
    source:"RadarSuper · datos de catálogo Mercadona",
    url:"https://radarsuper.com/mercadona/p/cerveza-doble-malta-pack-6",
    checked:"10/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-anchoa-girasol-tripack",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Filetes de anchoa en aceite de girasol · pack 3",
    category:"Anchoas",
    status:"processed",
    evidence:"Elaborado en Marruecos · Francisco Gil Comes",
    note:"La referencia actual se atribuye a Francisco Gil Comes y la ficha consultada declara Marruecos. Se clasifica como elaborado/envasado para no confundir el lugar de transformación con la zona de captura del pescado.",
    source:"SuperSupers · ficha de producto y etiquetado",
    url:"https://www.supersupers.com/comparar/filetes-de-anchoa-en-aceite-de-girasol-hacendado-3-bandejas-x-0-029-kg",
    checked:"10/09/2026",
    barcode:"8480000184139",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-anchoa-oliva-42",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Filetes de anchoa en aceite de oliva 42 g",
    category:"Anchoas",
    status:"processed",
    evidence:"Producto elaborado en Marruecos",
    note:"El etiquetado documentado para el EAN 8480000184023 indica elaboración en Marruecos. La zona de pesca depende del lote y no debe confundirse con el lugar de elaboración.",
    source:"Etiqueta física documentada · referencia Hacendado",
    url:"https://eldiestro.info/2026/08/guia-practica-para-detectar-producto-marroqui-en-tiendas-y-supermercados/",
    checked:"10/09/2026",
    barcode:"8480000184023",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-anchoa-oliva-pack3",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Filetes de anchoa en aceite de oliva · pack 3 · 120 g",
    category:"Anchoas",
    status:"watch",
    evidence:"Proveedor Francisco Gil Comes · revisar país de elaboración del lote",
    note:"La referencia actual de 3 bandejas está atribuida a Francisco Gil Comes, proveedor que elabora anchoas de Mercadona también en Marruecos. Al no disponer de una declaración de país inequívoca para todos los lotes de este formato, se mantiene en vigilancia y no se clasifica como boicot directo.",
    source:"SuperSupers · ficha actual de producto",
    url:"https://www.supersupers.com/comparar/filetes-de-anchoa-en-aceite-de-oliva-hacendado-3-bandejas-x-0-029-kg",
    checked:"10/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"Debe comprobarse el país de elaboración en el envase del lote concreto."}
  },
  {
    id:"mercadona-anchoa-oliva-74",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Filetes de anchoa en aceite de oliva 74 g",
    category:"Anchoas",
    status:"processed",
    evidence:"Pescado del Cantábrico · producto elaborado en Marruecos",
    note:"El etiquetado de esta referencia distingue expresamente la zona de captura de la elaboración: pescado en el Cantábrico y elaborado en Marruecos. Se clasifica por tanto como elaborado/envasado.",
    source:"Directo al Paladar · etiquetado y explicación de Mercadona",
    url:"https://www.directoalpaladar.com/ingredientes-y-alimentos/que-anchoas-cantabrico-mercadona-estan-envasadas-marruecos-1",
    checked:"10/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La zona de pesca puede variar por lote; la evidencia aquí se refiere a la elaboración."}
  },
  {
    id:"mercadona-boquerones-vinagre",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Boquerones en vinagre en aceite de girasol 80 g",
    category:"Salazones y ahumados",
    status:"processed",
    evidence:"Producido en Marruecos",
    note:"La documentación del producto atribuye la producción en Marruecos y la distribución a Francisco Gil Comes, S.L.U.",
    source:"El MIRA · datos reproducidos del etiquetado",
    url:"https://www.elmira.es/articulo/economia/mercadona-pasa-jamon-iberico-apuesta-aperitivo-gourmet-amantes-salmon/20250107012153493006.html",
    checked:"10/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"mercadona-boquerones-alinados",
    chain:"Mercadona",
    brand:"Hacendado",
    product:"Boquerones aliñados 80 g",
    category:"Salazones y ahumados",
    status:"processed",
    evidence:"Producto elaborado en Marruecos · Agr. 3508",
    note:"La fotografía de etiqueta aportada muestra de forma legible «Producto elaborado en Marruecos» y Agr. 3508. La ficha actual confirma la referencia y el fabricante Francisco Gil Comes.",
    source:"Etiqueta física legible + RadarSuper",
    url:"https://radarsuper.com/mercadona/p/boquerones-alinados-hacendado-bandeja",
    checked:"10/09/2026",
    barcode:"8402001013553",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La fuente actual no identifica disponibilidad por código postal o tienda."}
  },
  {
    id:"alcampo-cuca-sardinas",
    chain:"Alcampo",
    brand:"CUCA",
    product:"Sardinas en aceite de oliva 85 g",
    category:"Conservas de pescado",
    status:"conflict",
    evidence:"Etiqueta física: producto de Marruecos · ficha Alcampo: país España / denominación Marruecos",
    note:"La fotografía física aportada indica «PRODUCTO DE MARRUECOS». Sin embargo, la ficha oficial actual de Alcampo declara España como país de origen y Marruecos como denominación de origen. Se conserva como caso contradictorio hasta aclarar si se trata de variación de lote o de un error de ficha.",
    source:"Etiqueta física + ficha oficial de Alcampo",
    url:"https://www.compraonline.alcampo.es/products/cuca-sardinas-en-aceite-de-oliva-lata-de-85-g/28673",
    checked:"10/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"Debe comprobarse el lote concreto por la contradicción entre fuentes."}
  }
]);

/* Altas documentadas DIA y ALDI 11/09/2026. */
window.data.push(...[
  {
    id:"dia-ubago-sardinas-oliva",
    chain:"DIA",
    brand:"Ubago",
    product:"Sardinas en aceite de oliva 80 g",
    category:"Conservas de pescado",
    status:"confirmed",
    evidence:"País de origen: Marruecos · establecimiento MA 3498",
    note:"La ficha oficial de DIA declara expresamente Marruecos como país de origen e identifica el establecimiento autorizado MA 3498. Se clasifica como origen confirmado.",
    source:"Ficha oficial de DIA",
    url:"https://www.dia.es/conservas-caldos-y-cremas/caballa-y-sardinas/p/242972",
    checked:"11/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La ficha confirma el producto en DIA, pero la disponibilidad puede variar por zona de reparto."}
  },
  {
    id:"dia-calvo-sardinillas-baja-sal",
    chain:"DIA",
    brand:"Calvo",
    product:"Sardinillas en aceite de oliva bajo en sal 60 g",
    category:"Conservas de pescado",
    status:"confirmed",
    evidence:"País de origen: Marruecos",
    note:"La ficha oficial de DIA declara expresamente Marruecos como país de origen de esta referencia Calvo. Se clasifica como origen confirmado.",
    source:"Ficha oficial de DIA",
    url:"https://www.dia.es/conservas-caldos-y-cremas/caballa-y-sardinas/p/181199",
    checked:"11/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"La ficha confirma el producto en DIA, pero la disponibilidad puede variar por zona de reparto."}
  },
  {
    id:"aldi-judia-verde-plana",
    chain:"Aldi",
    brand:"Fresco",
    product:"Judía verde plana 500 g",
    category:"Verdura fresca",
    status:"variable",
    evidence:"Origen posible: Marruecos, España",
    note:"Folletos de ALDI Península publicados de forma repetida en 2026 indican Marruecos y España como posibles orígenes de esta referencia. Al ser producto fresco, debe comprobarse el país del lote disponible en tienda.",
    source:"Folletos ALDI Península 2026",
    url:"https://eldiariodeunapeluquera.com/wp-content/uploads/2026/04/Folleto-semanal-ALDI-Del-4-al-10-de-mayo-de-2026.pdf",
    checked:"11/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"El origen depende del lote; la documentación consultada no identifica disponibilidad por tienda."}
  },
  {
    id:"aldi-arandanos-125",
    chain:"Aldi",
    brand:"Fresco",
    product:"Arándanos 125 g",
    category:"Fruta fresca",
    status:"variable",
    evidence:"Origen posible: España, Portugal, Chile, Marruecos, Polonia",
    note:"El folleto ALDI Península vigente del 07/09 al 13/09/2026 incluye Marruecos entre los posibles orígenes de los arándanos de 125 g. El lote físico determina el país efectivo.",
    source:"Folleto ALDI Península 07/09–13/09/2026 · reproducción de catálogo",
    url:"https://www.kimbino.es/productos/arandanos/",
    checked:"11/09/2026",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"El origen depende del lote; la fuente no identifica disponibilidad por tienda."}
  }
]);

/* Imágenes locales: mantener compatibilidad con el archivo histórico WebP y aceptar
   también JPG, JPEG y PNG sin exigir conversiones manuales. scanner.js intenta primero
   .webp; este manejador intercepta el error antes de que descarte la figura y prueba
   sucesivamente el resto de extensiones. */
(() => {
  const formats = ['webp','jpg','jpeg','png'];

  document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement)) return;

    const src = img.getAttribute('src') || '';
    if (!src.includes('assets/products/')) return;

    const match = src.match(/^(.*\/[^?]+)\.(webp|jpg|jpeg|png)(\?[^#]*)?$/i);
    if (!match) return;

    const current = formats.indexOf(match[2].toLowerCase());
    if (current < 0 || current >= formats.length - 1) return;

    event.stopImmediatePropagation();
    const next = formats[current + 1];
    img.src = `${match[1]}.${next}${match[3] || ''}`;
  }, true);
})();