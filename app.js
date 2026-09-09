const data = window.data || [];
const chainMeta = {
  "Mercadona": {
    logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mercadona.svg",
    domain:"mercadona.es"
  },
  "Carrefour": {
    logo:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Carrefour_logo.svg",
    domain:"carrefour.es"
  },
  "Alcampo": {
    logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Alcampo.png",
    domain:"alcampo.es"
  },
  "Lidl": {
    logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Lidl-Logo.svg",
    domain:"lidl.es"
  },
  "Aldi": {
    logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/AldiNord-WorldwideLogo.svg",
    domain:"aldi.es"
  },
  "DIA": {
    logo:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Dia_2019.svg",
    domain:"dia.es"
  }
};

const chainOrder = ["Mercadona","Carrefour","Alcampo","Lidl","Aldi","DIA"];
const labels = {
  confirmed:"Origen confirmado",
  processed:"Elaborado / envasado",
  variable:"Origen variable",
  conflict:"Datos contradictorios",
  watch:"Vigilancia estacional"
};

let saved = new Set(JSON.parse(localStorage.getItem("om_saved") || "[]"));
let quickMode = "";
let compact = false;
let selectedPostcode = localStorage.getItem("om_postcode") || "";
let strictLocal = localStorage.getItem("om_strict_local") === "1";

const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'})[m]);

function logoHTML(chain, cls=""){
  const meta = chainMeta[chain];
  if(!meta) return `<span class="logo-fallback" style="display:block">${esc(chain)}</span>`;
  return `<img class="${cls}" src="${meta.logo}" alt="Logo ${esc(chain)}" loading="lazy" referrerpolicy="no-referrer"
    onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span class="logo-fallback">${esc(chain)}</span>`;
}

function populateFilters(){
  const chains = [...new Set(data.map(x=>x.chain))].sort();
  chains.forEach(v => $("#chain").insertAdjacentHTML("beforeend", `<option value="${esc(v)}">${esc(v)}</option>`));
  [...new Set(data.map(x=>x.category))].sort().forEach(v => $("#category").insertAdjacentHTML("beforeend", `<option value="${esc(v)}">${esc(v)}</option>`));
}

function renderChains(){
  $("#chainGrid").innerHTML = chainOrder.map(chain => {
    const total = data.filter(x=>x.chain===chain).length;
    const direct = data.filter(x=>x.chain===chain && ["confirmed","processed"].includes(x.status)).length;
    const active = $("#chain").value === chain;
    return `<button class="chain-card ${active?"active":""}" data-chain="${esc(chain)}">
      <div class="chain-logo">${logoHTML(chain)}</div>
      <div class="chain-name">${esc(chain)}</div>
      <div class="chain-count">${total ? direct+" directas · "+total+" fichas" : "sin referencias"}</div>
    </button>`;
  }).join("");
  document.querySelectorAll("[data-chain]").forEach(btn => btn.addEventListener("click", () => {
    $("#chain").value = $("#chain").value === btn.dataset.chain ? "" : btn.dataset.chain;
    quickMode = "";
    syncQuick();
    render();
    document.querySelector("#productos").scrollIntoView({behavior:"smooth",block:"start"});
  }));
}

function normalizePostcode(value){
  const cp = String(value || "").replace(/\D/g,"").slice(0,5);
  return cp.length===5 ? cp : "";
}

function localMatch(x){
  if(!selectedPostcode) return {exact:false,known:false};
  const geo = x.geo || {};
  const postcodes = Array.isArray(geo.postcodes) ? geo.postcodes : [];
  return {
    exact: postcodes.includes(selectedPostcode),
    known: geo.scope && geo.scope !== "unlocalized"
  };
}

function locationLabel(x){
  if(!selectedPostcode) return "";
  const m = localMatch(x);
  if(m.exact) return `<span class="location-chip exact">✓ Confirmado en CP ${esc(selectedPostcode)}</span>`;
  return `<span class="location-chip unknown">○ Sin dato local para CP ${esc(selectedPostcode)}</span>`;
}

function updateLocalUI(){
  $("#postcode").value = selectedPostcode;
  $("#strictLocal").checked = strictLocal;
  $("#cpActiveValue").textContent = selectedPostcode;
  $("#cpActive").classList.toggle("show",!!selectedPostcode);

  if(!selectedPostcode){
    $("#localStatus").innerHTML = `<strong>Sin CP seleccionado.</strong> Se muestran todas las referencias documentadas.`;
    return;
  }

  const exact = data.filter(x=>localMatch(x).exact).length;
  const mode = strictLocal
    ? `Modo estricto: sólo se muestran fichas con observación explícita en ese CP.`
    : `Modo amplio: las referencias sin geolocalización siguen visibles y se marcan como “sin dato local”.`;
  $("#localStatus").innerHTML = `<strong>CP ${esc(selectedPostcode)} activo.</strong> ${exact} referencias tienen una observación local cargada. ${mode}`;
}

function filtered(){
  const q = $("#search").value.trim().toLowerCase();
  const chain = $("#chain").value;
  const status = $("#status").value;
  const category = $("#category").value;
  return data.filter(x=>{
    const hay = [x.product,x.brand,x.category,x.chain,x.evidence,x.note].join(" ").toLowerCase();
    let ok = (!q || hay.includes(q)) && (!chain || x.chain===chain) && (!status || x.status===status) && (!category || x.category===category);
    if(quickMode==="boycott") ok = ok && ["confirmed","processed"].includes(x.status);
    if(quickMode==="fresh") ok = ok && ["fruta fresca","verdura fresca","fruta congelada","hierbas frescas"].includes(x.category.toLowerCase());
    if(quickMode==="review") ok = ok && ["variable","conflict","watch"].includes(x.status);
    if(quickMode==="saved") ok = ok && saved.has(x.id);
    if(selectedPostcode && strictLocal) ok = ok && localMatch(x).exact;
    return ok;
  });
}

function render(){
  renderChains();
  const rows = filtered();
  const grid = $("#productGrid");
  grid.classList.toggle("compact",compact);
  if(!rows.length){
    grid.innerHTML = `<div class="empty">${selectedPostcode && strictLocal ? `Todavía no hay referencias con disponibilidad local cargada para el CP ${esc(selectedPostcode)}. Desactiva “Sólo disponibilidad confirmada” para ver referencias generales mientras ampliamos la cobertura.` : `No hay fichas que coincidan con esos filtros.`}</div>`;
    return;
  }
  grid.innerHTML = rows.map((x,i)=>`
    <article class="product-card">
      <div class="card-index">OM/${String(i+1).padStart(3,"0")}</div>
      <div class="product-top">
        <div class="mini-logo">${logoHTML(x.chain)}</div>
        <div class="chain-meta"><b>${esc(x.chain)}</b><span>${esc(x.category)}</span></div>
      </div>
      <div class="product-body">
        <div class="status-line">
          <span class="status ${esc(x.status)}">${esc(labels[x.status])}</span>
          <button class="save ${saved.has(x.id)?"saved":""}" data-save="${esc(x.id)}" title="Guardar">★</button>
        </div>
        <h3>${esc(x.product)}</h3>
        <div class="brandline">${esc(x.brand)}</div>
        ${locationLabel(x)}
        <div class="evidence-box">${esc(x.evidence)}</div>
        <p class="product-note">${esc(x.note)}</p>
        <div class="card-actions">
          <button class="details" data-detail="${esc(x.id)}">Abrir ficha</button>
          <a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer" title="Abrir fuente">↗</a>
        </div>
      </div>
    </article>`).join("");

  document.querySelectorAll("[data-save]").forEach(btn=>btn.addEventListener("click",()=>toggleSaved(btn.dataset.save)));
  document.querySelectorAll("[data-detail]").forEach(btn=>btn.addEventListener("click",()=>openDetail(btn.dataset.detail)));
}

function toggleSaved(id){
  saved.has(id) ? saved.delete(id) : saved.add(id);
  localStorage.setItem("om_saved",JSON.stringify([...saved]));
  updateSavedUI();
  render();
}

function updateSavedUI(){
  $("#savedCountTop").textContent = saved.size;
  $("#savedCountDock").textContent = saved.size;
  $("#savedDock").classList.toggle("show",saved.size>0);
}

function openDetail(id){
  const x = data.find(p=>p.id===id);
  if(!x) return;
  $("#detailBody").innerHTML = `
    <span class="status ${esc(x.status)}">${esc(labels[x.status])}</span>
    <h3>${esc(x.product)}</h3>
    <div class="modal-grid">
      <div class="modal-cell"><span>Supermercado</span><b>${esc(x.chain)}</b></div>
      <div class="modal-cell"><span>Marca</span><b>${esc(x.brand)}</b></div>
      <div class="modal-cell"><span>Evidencia</span><b>${esc(x.evidence)}</b></div>
      <div class="modal-cell"><span>Comprobado</span><b>${esc(x.checked)}</b></div>
      <div class="modal-cell"><span>Disponibilidad local</span><b>${selectedPostcode ? (localMatch(x).exact ? "Confirmada en CP "+esc(selectedPostcode) : "Sin observación cargada para CP "+esc(selectedPostcode)) : "Introduce un CP para comprobarla"}</b></div>
    </div>
    <p class="modal-note">${esc(x.note)}</p>
    <div class="modal-cell" style="margin-bottom:16px"><span>Fuente</span><b>${esc(x.source)}</b></div>
    <div class="modal-actions">
      <a class="primary" href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">Abrir fuente ↗</a>
      <button onclick="shareProduct('${esc(x.id)}')">Compartir ficha</button>
      <button onclick="toggleSaved('${esc(x.id)}')">${saved.has(x.id)?"Quitar de guardados":"Guardar ★"}</button>
    </div>`;
  $("#detailDialog").showModal();
}

async function shareProduct(id){
  const x=data.find(p=>p.id===id); if(!x) return;
  const text=`ORIGEN MARRUECOS — ${x.product} (${x.chain})\n${x.evidence}\nFuente: ${x.url}`;
  try{
    if(navigator.share) await navigator.share({title:`Origen Marruecos · ${x.product}`,text,url:x.url});
    else { await navigator.clipboard.writeText(text); toast("Ficha copiada al portapapeles."); }
  }catch(e){}
}

function openSaved(){
  const rows=data.filter(x=>saved.has(x.id));
  $("#savedBody").innerHTML = rows.length ? `
    <p style="margin-top:0">Tu selección se guarda sólo en este navegador.</p>
    ${rows.map(x=>`<div class="modal-cell" style="margin-bottom:8px">
      <span>${esc(x.chain)} · ${esc(labels[x.status])}</span>
      <b>${esc(x.product)}</b>
    </div>`).join("")}
    <div class="modal-actions" style="margin-top:16px">
      <button class="primary" id="copySaved">Copiar lista</button>
      <button id="clearSaved">Vaciar lista</button>
    </div>` : `<p>No has guardado ningún producto.</p>`;
  $("#savedDialog").showModal();
  $("#copySaved")?.addEventListener("click",async()=>{
    const txt=rows.map(x=>`• ${x.product} — ${x.chain} — ${x.evidence}`).join("\n");
    await navigator.clipboard.writeText(txt); toast("Lista copiada.");
  });
  $("#clearSaved")?.addEventListener("click",()=>{
    saved.clear(); localStorage.setItem("om_saved","[]"); updateSavedUI(); render(); $("#savedDialog").close();
  });
}

function syncQuick(){
  document.querySelectorAll("[data-quick]").forEach(b=>b.classList.toggle("active",b.dataset.quick===quickMode));
}

function toast(msg){
  const t=$("#toast"); t.textContent=msg; t.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>t.classList.remove("show"),2200);
}

$("#postcodeForm").addEventListener("submit",e=>{
  e.preventDefault();
  const cp = normalizePostcode($("#postcode").value);
  if(!cp){
    toast("Introduce un código postal de 5 cifras.");
    $("#postcode").focus();
    return;
  }
  selectedPostcode = cp;
  localStorage.setItem("om_postcode",cp);
  updateLocalUI();
  render();
  document.querySelector("#productos").scrollIntoView({behavior:"smooth",block:"start"});
});

$("#strictLocal").addEventListener("change",()=>{
  strictLocal = $("#strictLocal").checked;
  localStorage.setItem("om_strict_local",strictLocal ? "1" : "0");
  updateLocalUI();
  render();
});

$("#clearPostcode").addEventListener("click",()=>{
  selectedPostcode = "";
  strictLocal = false;
  localStorage.removeItem("om_postcode");
  localStorage.removeItem("om_strict_local");
  updateLocalUI();
  render();
});

populateFilters();
$("#statTotal").textContent=data.length;
$("#heroTotal").textContent=data.length;
$("#statBoycott").textContent=data.filter(x=>["confirmed","processed"].includes(x.status)).length;
$("#statReview").textContent=data.filter(x=>["variable","conflict","watch"].includes(x.status)).length;
$("#statSources").textContent=new Set(data.map(x=>x.chain)).size;

["search","chain","status","category"].forEach(id=>{
  $("#"+id).addEventListener(id==="search"?"input":"change",()=>{ quickMode=""; syncQuick(); render(); });
});

document.querySelectorAll("[data-quick]").forEach(btn=>btn.addEventListener("click",()=>{
  quickMode=btn.dataset.quick; $("#status").value=""; syncQuick(); render();
}));

$("#clearFilters").addEventListener("click",()=>{
  $("#search").value=""; $("#chain").value=""; $("#status").value=""; $("#category").value=""; quickMode=""; syncQuick(); render();
});

$("#gridView").addEventListener("click",()=>{
  compact=false; $("#gridView").classList.add("active"); $("#compactView").classList.remove("active"); render();
});
$("#compactView").addEventListener("click",()=>{
  compact=true; $("#compactView").classList.add("active"); $("#gridView").classList.remove("active"); render();
});

$("#randomBtn").addEventListener("click",()=>{
  const pool=data.filter(x=>["confirmed","processed"].includes(x.status));
  openDetail(pool[Math.floor(Math.random()*pool.length)].id);
});

$("#savedBtn").addEventListener("click",openSaved);
$("#openSavedDock").addEventListener("click",openSaved);
document.querySelector("[data-close]").addEventListener("click",()=>$("#detailDialog").close());
document.querySelector("[data-close-saved]").addEventListener("click",()=>$("#savedDialog").close());

$("#copyTemplate").addEventListener("click",async()=>{
  const tpl=`PRODUCTO:\nMARCA:\nSUPERMERCADO:\nPAÍS DE ORIGEN QUE FIGURA EN LA ETIQUETA:\nENVASADO / ELABORADO EN:\nLOTE:\nFECHA / TIENDA:\nFOTO FRONTAL: sí/no\nFOTO DE ETIQUETA LEGIBLE: sí/no\nOBSERVACIONES:`;
  try{await navigator.clipboard.writeText(tpl);toast("Plantilla copiada.");}catch(e){toast("No se pudo copiar automáticamente.");}
});

updateSavedUI();
updateLocalUI();
render();
