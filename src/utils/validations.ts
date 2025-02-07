import { z } from "zod";

export const loginSchema = z.object({
  correo: z.string().email("Correo inválido").trim(),
  clave: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .trim(),
});

export const registerSchema = z.object({
  nombre: z.string().min(3, "El nombre debe tener al menos 3 caracteres").trim(),
  correo: z.string().email("Correo inválido").trim(),
  clave: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .trim(),
});
