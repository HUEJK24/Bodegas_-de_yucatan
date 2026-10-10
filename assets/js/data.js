/* Datos del sitio. Para agregar una bodega, copia un bloque y ajusta los campos. */

/* Rutas relativas segun la ubicacion de la pagina (raiz o carpeta paginas/). */
const EN_PAGINAS = /\/paginas\//.test(location.pathname);
const RUTA_RAIZ = EN_PAGINAS ? "../" : "";
const RUTA_PAGINAS = EN_PAGINAS ? "" : "paginas/";


const SITIO = {
  nombre: "Bodegas de Yucatán",
  telefono: "+52 999 123 4567",
  telefonoLink: "+529991234567",
  whatsapp: "529991234567", // numero para wa.me (sin signos)
  correo: "ventas@bodegasdeyucatan.mx",
  direccion: "Av. Prolongación Montejo, Mérida, Yucatán",
  horario: "Lunes a Viernes de 9:00 a 18:00 hrs",
  mapas: "https://www.google.com/maps?q=Merida,Yucatan&output=embed"
};

const BODEGAS = [
  {
    id: "bodega-crit-13",
    titulo: "Bodega CRIT 13",
    complejo: "Complejo CRIT",
    area: 693,
    precio: 65835,
    precioTexto: "Desde $65,835 / mes",
    ubicacion: "Ejido Chuburná, Mérida",
    andenes: 1,
    altura: "7.5 m",
    fondo: "35 m",
    seguridad: "Caseta 24/7 y acceso controlado",
    oficinas: "1 oficina",
    estado: "Disponible",
    imagen: "assets/img/bodega-1.jpg",
    fotos: ["assets/img/bodega-1.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-2.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Bodega industrial de 693 m² ubicada en el Complejo CRIT, con excelente acceso a periférico y avenidas principales. Ideal para almacenaje y distribución.",
  },
  {
    id: "bodega-crit-14",
    titulo: "Bodega CRIT 14",
    complejo: "Complejo CRIT",
    area: 1050,
    precio: 99750,
    precioTexto: "Desde $99,750 / mes",
    ubicacion: "Ejido Chuburná, Mérida",
    andenes: 2,
    altura: "9 m",
    fondo: "42 m",
    seguridad: "Caseta 24/7 y circuito cerrado",
    oficinas: "2 oficinas",
    estado: "Disponible",
    imagen: "assets/img/bodega-2.jpg",
    fotos: ["assets/img/bodega-2.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-5.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Amplia nave con 2 andenes de carga y maniobrabilidad para tráiler. Cuenta con patio de maniobras y estacionamiento.",
  },
  {
    id: "bodega-poniente-01",
    titulo: "Bodega Poniente 01",
    complejo: "Bodegas Poniente",
    area: 1200,
    precio: 108000,
    precioTexto: "Desde $108,000 / mes",
    ubicacion: "Poniente, Mérida",
    andenes: 3,
    altura: "10 m",
    fondo: "50 m",
    seguridad: "Guardia 24/7 y CCTV",
    oficinas: "Oficinas administrativas",
    estado: "Disponible",
    imagen: "assets/img/bodega-3.jpg",
    fotos: ["assets/img/bodega-3.jpg", "assets/img/interior-2.jpg", "assets/img/bodega-4.jpg", "assets/img/interior-1.jpg"],
    descripcion: "Nave premium en el corredor industrial poniente, con andén a nivel y acceso directo desde el periférico.",
  },
  {
    id: "bodega-poniente-02",
    titulo: "Bodega Poniente 02",
    complejo: "Bodegas Poniente",
    area: 500,
    precio: 42500,
    precioTexto: "Desde $42,500 / mes",
    ubicacion: "Poniente, Mérida",
    andenes: 1,
    altura: "7 m",
    fondo: "28 m",
    seguridad: "Acceso controlado",
    oficinas: "Sin oficinas",
    estado: "Disponible",
    imagen: "assets/img/bodega-5.jpg",
    fotos: ["assets/img/bodega-5.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-6.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Opción de entrada para pequeñas y medianas empresas que requieren almacenamiento seguro cerca de la ciudad.",
  },
  {
    id: "bodega-carretera-05",
    titulo: "Bodega Carretera 05",
    complejo: "Complejo Carretera",
    area: 850,
    precio: 68000,
    precioTexto: "Desde $68,000 / mes",
    ubicacion: "Carretera Mérida–Progreso",
    andenes: 2,
    altura: "8.5 m",
    fondo: "40 m",
    seguridad: "Caseta y cercado perimetral",
    oficinas: "1 oficina",
    estado: "Disponible",
    imagen: "assets/img/bodega-4.jpg",
    fotos: ["assets/img/bodega-4.jpg", "assets/img/interior-2.jpg", "assets/img/bodega-1.jpg", "assets/img/interior-1.jpg"],
    descripcion: "Ubicación estratégica sobre la carretera a Progreso, ideal para logística y distribución hacia el puerto.",
  },
  {
    id: "bodega-kancun-07",
    titulo: "Bodega Kan Cun 07",
    complejo: "Bodegas Kan Cun",
    area: 1450,
    precio: 123250,
    precioTexto: "Desde $123,250 / mes",
    ubicacion: "Kan Cun, Mérida",
    andenes: 4,
    altura: "11 m",
    fondo: "55 m",
    seguridad: "Guardia 24/7, CCTV y acceso vehicular",
    oficinas: "Oficinas + baños",
    estado: "Disponible",
    imagen: "assets/img/bodega-6.jpg",
    fotos: ["assets/img/bodega-6.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-3.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Centro de distribución de gran formato con múltiples andenes y patio amplio para maniobras de tráiler.",
  },
  {
    id: "bodega-construccion-90",
    titulo: "Bodega a la Medida 90 días",
    complejo: "Proyecto a la medida",
    area: 600,
    precio: 48000,
    precioTexto: "Cotización personalizada",
    ubicacion: "Mérida, Yucatán",
    andenes: 1,
    altura: "7.5 m",
    fondo: "30 m",
    seguridad: "A definir según proyecto",
    oficinas: "A definir",
    estado: "Construcción",
    imagen: "assets/img/bodega-7.jpg",
    fotos: ["assets/img/bodega-7.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-4.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Construimos la bodega que tu operación necesita y te la entregamos en 90 días. Diseño, permisos y obra incluidos.",
  },
  {
    id: "bodega-crit-15",
    titulo: "Bodega CRIT 15",
    complejo: "Complejo CRIT",
    area: 900,
    precio: 76500,
    precioTexto: "Desde $76,500 / mes",
    ubicacion: "Ejido Chuburná, Mérida",
    andenes: 2,
    altura: "8 m",
    fondo: "38 m",
    seguridad: "Caseta 24/7",
    oficinas: "1 oficina",
    estado: "Rentada",
    imagen: "assets/img/bodega-1.jpg",
    fotos: ["assets/img/bodega-1.jpg", "assets/img/interior-2.jpg", "assets/img/bodega-5.jpg", "assets/img/interior-1.jpg"],
    descripcion: "Nave versátil en el Complejo CRIT, con buena altura libre y superficie uniforme para racks de almacenamiento.",
  },
  {
    id: "bodega-poniente-03",
    titulo: "Bodega Poniente 03",
    complejo: "Bodegas Poniente",
    area: 2000,
    precio: 170000,
    precioTexto: "Desde $170,000 / mes",
    ubicacion: "Poniente, Mérida",
    andenes: 5,
    altura: "12 m",
    fondo: "60 m",
    seguridad: "Guardia 24/7, CCTV y acceso peatonal controlado",
    oficinas: "Oficinas administrativas completas",
    estado: "Disponible",
    imagen: "assets/img/bodega-3.jpg",
    fotos: ["assets/img/bodega-3.jpg", "assets/img/interior-1.jpg", "assets/img/bodega-6.jpg", "assets/img/interior-2.jpg"],
    descripcion: "Bodega de gran formato en el complejo más moderno de la zona poniente. Ideal para operaciones logísticas de gran escala.",
  }
];

/* Ajusta las rutas de imagen a la ubicacion de la pagina actual. */
BODEGAS.forEach((b) => {
  b.imagen = RUTA_RAIZ + b.imagen;
  b.fotos = b.fotos.map((f) => RUTA_RAIZ + f);
});

function formatoPrecio(n) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

function enlaceWhatsApp(mensaje) {
  return "https://wa.me/" + SITIO.whatsapp + "?text=" + encodeURIComponent(mensaje);
}
