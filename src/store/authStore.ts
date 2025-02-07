/* eslint-disable @typescript-eslint/no-explicit-any */
import { UsuarioInterface } from "@/interfaces/usuario-interface";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import {jwtDecode} from "jwt-decode";

interface AuthState {
  token: string | null;
  usuario: UsuarioInterface | null;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      usuario: null,
      login: (token) => {
        try {
          const decoded: any = jwtDecode(token); // Decodificar el token JWT
          const elusuario :UsuarioInterface = {
            apellido:decoded.apellido,
            correo:decoded.correo,
            nombre:decoded.nombre
          }
          set({ token, usuario: elusuario }); // Guardar token y correo en Zustand
        } catch (error) {
          console.error("Error al decodificar el token jwt en auth-storage", error);
        }
      },
      logout: () => set({ token: null, usuario: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
