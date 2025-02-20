/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "../styles/Login.module.css"; // Importamos el módulo de estilos
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useAuthStore } from "../store/authStore";
import api from "../utils/api";
import { loginSchema } from "../utils/validations";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
 
  const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await api.post("/login", data);
      const token = response.data.token; // Extraer el token del backend
      login(token);
      toast.success("¡Inicio de sesión exitoso!");
      setTimeout(() => router.push("/welcome"), 2000);
    } catch (error) {
      toast.error("Credenciales incorrectas o error en el servidor.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer />
      <div className={styles.loginCard}>
        <h2 className="text-center">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" {...register("correo")} />
            {errors.correo && <p className="text-danger">{errors.correo.message}</p>}
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" {...register("clave")} />
            {errors.clave && <p className="text-danger">{errors.clave.message}</p>}
          </div>
          <button type="submit" className={`btn btn-primary ${styles.loginButton}`}>Ingresar</button>
          <p className="mt-3 text-center">
            ¿No tienes cuenta? <Link href="/register">Regístrate aquí</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
