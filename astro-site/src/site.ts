export const SITIO = {
  nombre: "Bodegas de Yucatán",
  telefono: "+52 999 123 4567",
  telefonoCorto: "999 123 4567",
  whatsapp: "529991234567",
  correo: "ventas@bodegasdeyucatan.mx",
  direccion: "Av. Prolongación Montejo, Mérida, Yucatán",
  horario: "Lunes a viernes, 9:00 a 18:00 hrs",
  mapa: "https://www.google.com/maps?q=Merida,Yucatan&output=embed",
};

export const NAV = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/bodegas", label: "Nuestras Bodegas" },
  { href: "/servicios", label: "Servicios" },
  { href: "/contacto", label: "Contacto" },
];

export const COMPLEJOS = [
  {
    nombre: "Bodegas Poniente",
    descripcion: "El corredor industrial más consolidado de la ciudad, con acceso directo al periférico.",
    imagen: "/images/poniente.png",
  },
  {
    nombre: "Complejo CRIT",
    descripcion: "Naves versátiles en Ejido Chuburná, cerca de avenidas principales.",
    imagen: "/images/crit.png",
  },
  {
    nombre: "Bodegas Kan Cun",
    descripcion: "Gran formato para centros de distribución y maniobras de tráiler.",
    imagen: "/images/kancun.png",
  },
];

export function telHref() {
  return "tel:" + SITIO.telefono.replace(/\s/g, "");
}

export function whatsappHref(mensaje: string) {
  return `https://wa.me/${SITIO.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

export function formatoPrecio(n: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 0,
  }).format(n);
}
