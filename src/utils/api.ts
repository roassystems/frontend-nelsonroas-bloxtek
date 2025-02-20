import axios from "axios";
const api = axios.create({
  
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("CHECANDO VALOR DE VARIABLE DE AMBIENTE PARA DEGUB EN ADAPTADOR APIR "+process.env.NEXT_PUBLIC_API_URL);
export default api;
