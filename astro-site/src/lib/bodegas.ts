import { getCollection } from "astro:content";

export async function getBodegas() {
  const bodegas = await getCollection("bodegas");
  return bodegas.sort((a, b) => a.data.orden - b.data.orden);
}

export async function getDestacadas(limite = 3) {
  const bodegas = await getBodegas();
  const destacadas = bodegas.filter((b) => b.data.destacada && b.data.estado === "Disponible");
  return (destacadas.length ? destacadas : bodegas).slice(0, limite);
}
