/* Lógica del sitio: renderiza tarjetas, catálogo, detalle y botones de WhatsApp. */

function construirTarjeta(b) {
  const chips = [
    b.area + " m²",
    b.andenes + " andén(es)",
    b.altura,
    b.estado
  ]
    .map((c) => '<span class="chip">' + c + "</span>")
    .join("");

  const claseEstado = b.estado === "Rentada" ? "tarjeta-etiqueta rentada" : "tarjeta-etiqueta";

  return `
    <article class="tarjeta">
      <div class="tarjeta-img">
        <div class="foto">${b.icono}</div>
        <span class="${claseEstado}">${b.estado}</span>
      </div>
      <div class="tarjeta-body">
        <h3>${b.titulo}</h3>
        <div class="tarjeta-meta">📍 ${b.ubicacion}</div>
        <div class="tarjeta-chips">${chips}</div>
        <div class="tarjeta-pie">
          <div class="precio">$${formatoPrecio(b.precio).replace("$", "")}<small>${b.area} m² · por mes</small></div>
          <a class="btn btn-linea" href="bodega.html?id=${b.id}">Ver detalles</a>
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
      : '<p style="grid-column:1/-1;text-align:center;color:#718096">No hay bodegas con ese filtro.</p>';
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

function cargarDetalle() {
  const cont = document.getElementById("detalle");
  if (!cont) return;

  const id = new URLSearchParams(location.search).get("id");
  const b = BODEGAS.find((x) => x.id === id) || BODEGAS[0];

  document.title = b.titulo + " | " + SITIO.nombre;

  const mensaje = "Hola, estoy interesado en rentar la " + b.titulo + " de " + b.area + " m² en " + b.ubicacion + ".";
  const galeria = b.fotos
    .map((f, i) => `<div class="${i === 0 ? "principal foto" : "mini foto"}">${f}</div>`)
    .join("");

  cont.innerHTML = `
    <p style="margin-bottom:18px"><a href="bodegas.html" style="color:var(--verde-oscuro);font-weight:600">← Volver al catálogo</a></p>
    <div class="detalle-grid">
      <div>
        <div class="galeria">${galeria}</div>
        <h2 style="margin:30px 0 10px">Descripción</h2>
        <p style="color:var(--gris-700)">${b.descripcion}</p>

        <h2 style="margin:30px 0 10px">Especificaciones técnicas</h2>
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
        <h1>${b.titulo}</h1>
        <div class="tarjeta-meta">📍 ${b.ubicacion}</div>
        <div class="precio-grande">${b.precioTexto}</div>
        <a class="btn btn-primario btn-bloque" style="margin-top:16px" target="_blank" href="${enlaceWhatsApp(mensaje)}">
          💬 Cotizar por WhatsApp
        </a>
        <a class="btn btn-linea btn-bloque" style="margin-top:10px" href="tel:${SITIO.telefono.replace(/\s/g, "")}">
          📞 Llamar ${SITIO.telefono}
        </a>
        <p style="color:var(--gris-500);font-size:13px;margin-top:14px">Respuesta en menos de 24 horas hábiles.</p>
      </aside>
    </div>`;
}

function inyectarWhatsApp() {
  const a = document.createElement("a");
  a.className = "whatsapp-flotante";
  a.target = "_blank";
  a.rel = "noopener";
  a.title = "Contactar por WhatsApp";
  a.href = enlaceWhatsApp("Hola, quiero información sobre las bodegas disponibles.");
  a.textContent = "💬";
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
