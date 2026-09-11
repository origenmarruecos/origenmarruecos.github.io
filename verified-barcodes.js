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
    image:"https://pbs.twimg.com/media/GywwZ8NWUAAoB1v.jpg",
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
    image:"https://prod-mercadona.imgix.net/images/66deb48f27f5589fd109d07685b6a2f2.jpg?fit=crop&h=600&w=600",
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
    image:"https://prod-mercadona.imgix.net/images/995a866fc8e7ce3c97ccc3a82008c10c.jpg?fit=crop&h=600&w=600",
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
    image:"https://megusta.lv/cdn/shop/files/IMG_7823.jpg?v=1760359843",
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
    image:"https://iber.market/wp-content/uploads/2025/10/9a7778131b8713e8a177a827544489f4-scaled.jpg",
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
    image:"https://dx7csy7aghu7b.cloudfront.net/prods/20458.webp",
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
    image:"https://s2.elespanol.com/2023/03/22/cocinillas/actualidad-gastronomica/750435237_231833213_1024x576.jpg",
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
    image:"https://cazaclientes.es/wp-content/uploads/2020/02/21c175f6c0a6ed1ebac0e26c6e663afe.1500.0.0.0.wmark_.e504f821.jpg",
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
    image:"https://iber.market/wp-content/uploads/2025/08/a684e4c575e2e7a19c068b579afa2dc0-scaled.jpg",
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
    image:"https://www.yourspanishshop.es/fe-800x800-ffffff-data/productos/3d-sardinillas-ao-rr90_0_0.png",
    geo:{scope:"unlocalized",postcodes:[],stores:[],note:"Debe comprobarse el lote concreto por la contradicción entre fuentes."}
  }
]);

/* Las fichas históricas usan WebP local 1000×1000. Para altas cuya foto procede de una
   fuente verificable externa, se conserva el mismo contenedor visual y object-fit:contain.
   Así no se deforma la imagen y, cuando exista un WebP local, scanner.js sigue teniendo prioridad. */
(() => {
  let detailId = "";
  let pending = false;

  const getRow = id => (Array.isArray(window.data) ? window.data.find(x => x.id === id) : null);

  function figure(row){
    const fig = document.createElement("div");
    fig.className = "product-photo";
    fig.dataset.productImage = row.id;
    fig.dataset.remoteImage = "1";
    const img = document.createElement("img");
    img.src = row.image;
    img.alt = `Imagen de ${row.product}`;
    img.loading = "lazy";
    img.decoding = "async";
    img.referrerPolicy = "no-referrer";
    img.addEventListener("error", () => fig.remove(), {once:true});
    fig.appendChild(img);
    return fig;
  }

  function run(){
    pending = false;
    document.querySelectorAll(".product-card").forEach(card => {
      if (card.querySelector(".product-photo")) return;
      const id = card.querySelector("[data-detail]")?.dataset.detail;
      const row = getRow(id);
      if (!row?.image) return;
      const top = card.querySelector(".product-top");
      if (top) top.insertAdjacentElement("afterend", figure(row));
    });

    if (detailId){
      const body = document.getElementById("detailBody");
      const row = getRow(detailId);
      if (body && row?.image && !body.querySelector(".modal-product-photo")){
        const fig = figure(row);
        fig.classList.add("modal-product-photo");
        const status = body.querySelector(".status");
        if (status) status.insertAdjacentElement("afterend", fig);
        else body.prepend(fig);
      }
    }
  }

  function schedule(){
    if (pending) return;
    pending = true;
    requestAnimationFrame(run);
  }

  document.addEventListener("click", e => {
    const b = e.target.closest?.("[data-detail]");
    if (!b) return;
    detailId = b.dataset.detail || "";
    setTimeout(schedule, 0);
  }, true);

  new MutationObserver(schedule).observe(document.body, {childList:true,subtree:true});
  window.addEventListener("load", schedule);
  schedule();
})();

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
