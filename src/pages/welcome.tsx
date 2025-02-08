import styles from "../styles/Welcome.module.css"; // Importamos el módulo de estilos
import { useAuthStore } from "../store/authStore";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Welcome() {
  const { token, usuario, logout } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/");
    }
    if(usuario === null || usuario === undefined){
      router.push("/");
    }
  }, [token, router, usuario]);

  return (
    <div className={styles.welcomeContainer} suppressHydrationWarning>
      <div className={styles.welcomeCard} suppressHydrationWarning>
        <h2>¡Bienvenido, {usuario !== null ? usuario.nombre + " " +usuario.apellido : ""}!</h2>
        <p>Correo: {usuario !== null ? usuario.correo : ""}</p>
        <p suppressHydrationWarning>Fecha de acceso: {new Date().toLocaleString()}</p>
        <button onClick={logout} className={styles.logoutButton}>Salir</button>
      </div>
    </div>
  );
}
