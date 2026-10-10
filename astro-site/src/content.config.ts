import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const bodegas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/bodegas" }),
  schema: z.object({
    titulo: z.string(),
    complejo: z.string(),
    precio: z.number().nullable(),
    area: z.number(),
    ubicacion: z.string(),
    andenes: z.number(),
    altura: z.string(),
    fondo: z.string(),
    seguridad: z.string(),
    oficinas: z.string(),
    estado: z.enum(["Disponible", "Rentada", "Construcción"]),
    fotos: z.array(z.string()).min(1),
    destacada: z.boolean().default(false),
    orden: z.number().default(99),
  }),
});

export const collections = { bodegas };
