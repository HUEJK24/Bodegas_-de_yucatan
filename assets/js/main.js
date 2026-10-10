/* Lógica del sitio: renderiza tarjetas, catálogo, detalle y botón de WhatsApp. */

const SVG_PIN = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
const SVG_WA_PATHS = '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>';
const SVG_WA = '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">' + SVG_WA_PATHS + '</svg>';
const SVG_WA_SM = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">' + SVG_WA_PATHS + '</svg>';

const SVG_PREV = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
const SVG_NEXT = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
const SVG_CERRAR = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
const SVG_SHARE = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 3.9M15.4 6.6 8.6 10.5"/></svg>';
const SVG_PRINT = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8" rx="1"/></svg>';

function construirTarjeta(b) {
  const chips = [b.area + " m²", b.andenes + " andén(es)", b.altura, b.estado]
    .map((c) => '<span class="chip">' + c + "</span>")
    .join("");

  const claseEstado = b.estado === "Rentada" ? "tarjeta-etiqueta rentada" : "tarjeta-etiqueta";

  return `
    <article class="tarjeta">
      <div class="tarjeta-img">
        <img src="${b.imagen}" alt="${b.titulo}" loading="lazy">
        <span class="${claseEstado}">${b.estado}</span>
        <span class="tarjeta-tipo">${b.complejo.toUpperCase()}</span>
      </div>
      <div class="tarjeta-body">
        <h3>${b.titulo}</h3>
        <div class="tarjeta-meta">${SVG_PIN} ${b.ubicacion}</div>
        <div class="tarjeta-chips">${chips}</div>
        <div class="tarjeta-pie">
          <div class="precio">$${formatoPrecio(b.precio).replace("$", "")}<small>${b.area} m² · por mes</small></div>
          <a class="btn btn-linea" href="${RUTA_PAGINAS}bodega.html?id=${b.id}">Ver detalles</a>
        </div>
      </div>
    </article>`;
}

function cargarDestacadas() {
  const cont = document.getElementById("destacadas");
  if (!cont) return;
  const seleccion = BODEGAS.filter((b) => b.estado === "Disponible").slice(0, 3);
  cont.innerHTML = seleccion.map(construirTarjeta).join("");
}

function cargarCatalogo() {
  const cont = document.getElementById("catalogo");
  if (!cont) return;

  const render = (lista) => {
    cont.innerHTML = lista.length
      ? lista.map(construirTarjeta).join("")
      : '<p style="grid-column:1/-1;text-align:center;color:#6b7280">No hay bodegas con ese filtro.</p>';
  };

  render(BODEGAS);

  const select = document.getElementById("filtroComplejo");
  if (select) {
    [...new Set(BODEGAS.map((b) => b.complejo))].forEach((c) => {
      const op = document.createElement("option");
      op.value = c;
      op.textContent = c;
      select.appendChild(op);
    });
    select.addEventListener("change", () => {
      render(select.value === "todos" ? BODEGAS : BODEGAS.filter((b) => b.complejo === select.value));
    });
  }
}

const lightbox = { total: 0, actual: 0, fotos: [], titulo: "" };

function construirDocumentoImpresion(b, fotos) {
  const fecha = new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "long", year: "numeric" });
  const filas = [
    ["Superficie", b.area + " m²"],
    ["Altura libre", b.altura],
    ["Fondo", b.fondo],
    ["Andenes", b.andenes],
    ["Oficinas", b.oficinas],
    ["Seguridad", b.seguridad],
    ["Complejo", b.complejo],
    ["Estado", b.estado],
  ].map(([k, v]) => '<tr><td>' + k + '</td><td>' + v + '</td></tr>').join("");

  const miniaturas = fotos.slice(1, 4).map((f, i) => '<img src="' + f + '" alt="Foto ' + (i + 2) + '">').join("");

  return `
    <div class="print-head">
      <div class="print-logo">
        <span class="mark">BY</span>
        <span>${SITIO.nombre}<small>Renta de bodegas industriales</small></span>
      </div>
      <div class="print-contact">
        ${SITIO.telefono}<br>${SITIO.correo}<br>${SITIO.direccion}
      </div>
    </div>
    <h1 class="print-titulo">${b.titulo}</h1>
    <div class="print-ubic">${b.ubicacion} &middot; ${b.complejo}</div>
    <span class="print-estado">${b.estado}</span>
    <div class="print-precio">${b.precioTexto} <span style="font-size:12px;color:#6b7280">/ mes</span></div>
    <img class="print-hero" src="${fotos[0]}" alt="${b.titulo}">
    ${miniaturas ? '<div class="print-thumbs">' + miniaturas + '</div>' : ""}
    <div class="print-grid">
      <div class="print-section">
        <h3>Descripción</h3>
        <p class="print-desc">${b.descripcion}</p>
      </div>
      <div class="print-section">
        <h3>Especificaciones técnicas</h3>
        <table class="print-tabla">${filas}</table>
      </div>
    </div>
    <div class="print-pie">
      <span>${SITIO.nombre} &middot; ${SITIO.telefono} &middot; ${SITIO.correo}</span>
      <span>Documento generado el ${fecha}</span>
    </div>`;
}

function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("visible");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("visible"), 2600);
}

function compartirBodega(b) {
  const url = location.href;
  const data = { title: b.titulo + " | " + SITIO.nombre, text: b.titulo + " — " + b.area + " m² en " + b.ubicacion, url };
  if (navigator.share) {
    navigator.share(data).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(url)
      .then(() => toast("Enlace copiado al portapapeles"))
      .catch(() => window.open(enlaceWhatsApp("Mira esta bodega: " + url), "_blank"));
  } else {
    window.open(enlaceWhatsApp("Mira esta bodega: " + url), "_blank");
  }
}

function iniciarCarrusel(total) {
  const carousel = document.getElementById("carousel");
  if (!carousel || total < 1) return;
  const slides = [...carousel.querySelectorAll(".carousel-slide")];
  const thumbs = [...carousel.querySelectorAll(".carousel-thumb")];
  const contador = document.getElementById("cActual");
  let actual = 0;

  const mostrar = (i) => {
    actual = (i + total) % total;
    slides.forEach((s, k) => s.classList.toggle("activo", k === actual));
    thumbs.forEach((t, k) => t.classList.toggle("activo", k === actual));
    if (contador) contador.textContent = actual + 1;
  };

  const prev = carousel.querySelector(".carousel-nav.prev");
  const next = carousel.querySelector(".carousel-nav.next");
  if (prev) prev.addEventListener("click", () => mostrar(actual - 1));
  if (next) next.addEventListener("click", () => mostrar(actual + 1));
  thumbs.forEach((t) => t.addEventListener("click", () => mostrar(Number(t.dataset.indice))));
  slides.forEach((s) => s.addEventListener("click", () => abrirLightbox(Number(s.dataset.indice))));
}

function iniciarLightbox(fotos, titulo) {
  lightbox.total = fotos.length;
  lightbox.actual = 0;
  lightbox.fotos = fotos;
  lightbox.titulo = titulo;

  let el = document.getElementById("lightbox");
  if (el) return;

  el = document.createElement("div");
  el.id = "lightbox";
  el.className = "lightbox";
  el.innerHTML = `
    <button class="lightbox-accion lightbox-cerrar" type="button" aria-label="Cerrar">${SVG_CERRAR}</button>
    ${fotos.length > 1 ? `<button class="lightbox-accion lightbox-nav prev" type="button" aria-label="Anterior">${SVG_PREV}</button><button class="lightbox-accion lightbox-nav next" type="button" aria-label="Siguiente">${SVG_NEXT}</button>` : ""}
    <img src="" alt="">
    <div class="lightbox-contador"></div>`;
  document.body.appendChild(el);

  el.querySelector(".lightbox-cerrar").addEventListener("click", cerrarLightbox);
  const p = el.querySelector(".lightbox-nav.prev");
  const n = el.querySelector(".lightbox-nav.next");
  if (p) p.addEventListener("click", () => navegarLightbox(-1));
  if (n) n.addEventListener("click", () => navegarLightbox(1));
  el.addEventListener("click", (e) => { if (e.target === el) cerrarLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (!el.classList.contains("abierto")) return;
    if (e.key === "Escape") cerrarLightbox();
    if (e.key === "ArrowRight") navegarLightbox(1);
    if (e.key === "ArrowLeft") navegarLightbox(-1);
  });
}

function abrirLightbox(i) {
  const el = document.getElementById("lightbox");
  if (!el) return;
  lightbox.actual = i;
  actualizarLightbox();
  el.classList.add("abierto");
}

function cerrarLightbox() {
  const el = document.getElementById("lightbox");
  if (el) el.classList.remove("abierto");
}

function navegarLightbox(dir) {
  if (!lightbox.total) return;
  lightbox.actual = (lightbox.actual + dir + lightbox.total) % lightbox.total;
  actualizarLightbox();
}

function actualizarLightbox() {
  const el = document.getElementById("lightbox");
  if (!el) return;
  const img = el.querySelector("img");
  img.src = lightbox.fotos[lightbox.actual];
  img.alt = lightbox.titulo + " " + (lightbox.actual + 1);
  const c = el.querySelector(".lightbox-contador");
  if (c) c.textContent = lightbox.total > 1 ? lightbox.actual + 1 + " / " + lightbox.total : "";
}

function cargarDetalle() {
  const cont = document.getElementById("detalle");
  if (!cont) return;

  const id = new URLSearchParams(location.search).get("id");
  const b = BODEGAS.find((x) => x.id === id) || BODEGAS[0];

  document.title = b.titulo + " | " + SITIO.nombre;

  const mensaje = "Hola, estoy interesado en rentar la " + b.titulo + " de " + b.area + " m² en " + b.ubicacion + ".";
  const fotos = b.fotos && b.fotos.length ? b.fotos : [b.imagen];
  const multi = fotos.length > 1;

  const slides = fotos.map((f, i) =>
    '<img class="carousel-slide' + (i === 0 ? " activo" : "") + '" src="' + f + '" alt="' + b.titulo + " " + (i + 1) + '" data-indice="' + i + '"' + (i === 0 ? "" : ' loading="lazy"') + ">"
  ).join("");
  const thumbs = fotos.map((f, i) =>
    '<img class="carousel-thumb' + (i === 0 ? " activo" : "") + '" src="' + f + '" alt="Miniatura ' + (i + 1) + '" data-indice="' + i + '" loading="lazy">'
  ).join("");

  cont.innerHTML = `
    <p class="volver"><a href="${RUTA_PAGINAS}bodegas.html">← Volver al catálogo</a></p>
    <div class="detalle-grid">
      <div>
        <div class="carousel" id="carousel">
          <div class="carousel-viewport">
            ${slides}
            <span class="carousel-contador"><span id="cActual">1</span> / ${fotos.length}</span>
            ${multi ? `<button class="carousel-nav prev" type="button" aria-label="Imagen anterior">${SVG_PREV}</button><button class="carousel-nav next" type="button" aria-label="Imagen siguiente">${SVG_NEXT}</button>` : ""}
          </div>
          ${multi ? `<div class="carousel-thumbs">${thumbs}</div>` : ""}
        </div>
        <h2 class="detalle-sub">Descripción</h2>
        <p style="color:var(--texto)">${b.descripcion}</p>

        <h2 class="detalle-sub">Especificaciones técnicas</h2>
        <table class="tabla-especificaciones">
          <tr><td>Superficie</td><td>${b.area} m²</td></tr>
          <tr><td>Altura libre</td><td>${b.altura}</td></tr>
          <tr><td>Fondo</td><td>${b.fondo}</td></tr>
          <tr><td>Número de andenes</td><td>${b.andenes}</td></tr>
          <tr><td>Oficinas</td><td>${b.oficinas}</td></tr>
          <tr><td>Seguridad</td><td>${b.seguridad}</td></tr>
          <tr><td>Complejo</td><td>${b.complejo}</td></tr>
          <tr><td>Estado</td><td>${b.estado}</td></tr>
        </table>
      </div>

      <aside class="panel">
        <span class="kicker">${b.complejo}</span>
        <h1 style="margin-top:8px">${b.titulo}</h1>
        <div class="tarjeta-meta" style="margin-top:8px">${SVG_PIN} ${b.ubicacion}</div>
        <div class="precio-grande">${b.precioTexto}</div>
        <a class="btn btn-primario btn-bloque" style="margin-top:18px" target="_blank" rel="noopener" href="${enlaceWhatsApp(mensaje)}">
          ${SVG_WA_SM} Cotizar por WhatsApp
        </a>
        <div class="acciones-ficha">
          <button class="btn btn-linea" id="btnCompartir" type="button">${SVG_SHARE} Compartir</button>
          <button class="btn btn-linea" id="btnImprimir" type="button">${SVG_PRINT} Imprimir / PDF</button>
        </div>
        <p style="color:var(--tenue);font-size:13px;margin-top:14px">Respuesta en menos de 24 horas hábiles.</p>
      </aside>
    </div>

    <div class="print-doc" id="printDoc">${construirDocumentoImpresion(b, fotos)}</div>`;

  iniciarCarrusel(fotos.length);
  iniciarLightbox(fotos, b.titulo);

  const btnCompartir = document.getElementById("btnCompartir");
  if (btnCompartir) btnCompartir.addEventListener("click", () => compartirBodega(b));
  const btnImprimir = document.getElementById("btnImprimir");
  if (btnImprimir) btnImprimir.addEventListener("click", () => window.print());
}

function inyectarWhatsApp() {
  const a = document.createElement("a");
  a.className = "whatsapp-flotante";
  a.target = "_blank";
  a.rel = "noopener";
  a.title = "Contactar por WhatsApp";
  a.setAttribute("aria-label", "Contactar por WhatsApp");
  a.href = enlaceWhatsApp("Hola, quiero información sobre las bodegas disponibles.");
  a.innerHTML = SVG_WA;
  document.body.appendChild(a);
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (toggle && nav) toggle.addEventListener("click", () => nav.classList.toggle("abierto"));
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  cargarDestacadas();
  cargarCatalogo();
  cargarDetalle();
  inyectarWhatsApp();
});
