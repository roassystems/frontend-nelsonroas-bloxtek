/* eslint-disable @typescript-eslint/no-unused-vars */
import styles from "../styles/Register.module.css"; // Importamos el módulo de estilos
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import api from "../utils/api";
import { registerSchema } from "../utils/validations";
import { z } from "zod";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

type RegisterForm = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const router = useRouter();

  const onSubmit = async (data: RegisterForm) => {
    try {
      await api.post("/registrarUsuario", data);
      toast.success("¡Registro exitoso! Redirigiendo a login...");
      setTimeout(() => router.push("/"), 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.mensaje || "Error en el registro.";
      toast.error(errorMessage);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <ToastContainer />
      <div className={styles.registerCard}>
        <h2 className="text-center">Registro</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              {...register("nombre")}
            />
            {errors.nombre && (
              <p className="text-danger">{errors.nombre.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              className="form-control"
              {...register("apellido")}
            />
            {errors.apellido && (
              <p className="text-danger">{errors.apellido.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="correo"
              className="form-control"
              {...register("correo")}
            />
            {errors.correo && (
              <p className="text-danger">{errors.correo.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="clave"
              className="form-control"
              {...register("clave")}
            />
            {errors.clave && (
              <p className="text-danger">{errors.clave.message}</p>
            )}
          </div>
          <button
            type="submit"
            className={`btn btn-primary ${styles.registerButton}`}
          >
            Registrarse
          </button>
          <p className="mt-3 text-center">
            ¿Ya tienes cuenta? <Link href="/">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
