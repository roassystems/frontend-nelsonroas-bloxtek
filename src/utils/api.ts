import axios from "axios";

// Función para crear la instancia de Axios con baseURL dinámica
export const createApiInstance = (baseURL) => {
  return axios.create({
    baseURL, // Se recibe la URL desde el servidor
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export async function getServerSideProps() {
  // Leer la variable del entorno en el servidor
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://backend-nelsonroas-bloxtek-production.up.railway.app";
  console.log("valor de api url del lado del servidor "+process.env.NEXT_PUBLIC_API_URL);
  return {
    props: {
      apiUrl, // Pasamos la URL como prop al cliente
    },
  };
}
const api = createApiInstance(getServerSideProps());
export default api;
