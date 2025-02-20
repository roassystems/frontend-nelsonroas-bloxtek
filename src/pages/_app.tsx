import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css"; // Importar Bootstrap globalmente
import "../styles/globals.css"; // Importar estilos globales
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("CHECANDO VALOR DE VARIABLE DE AMBIENTE PARAD DEGUB "+process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
