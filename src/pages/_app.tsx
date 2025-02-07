import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap globalmente
import "../styles/globals.css"; // Importar estilos globales
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
