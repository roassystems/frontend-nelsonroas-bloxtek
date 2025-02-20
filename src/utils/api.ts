"user server"
import axios from "axios";

// Usar API_URL en lugar de NEXT_PUBLIC_API_URL
const API_URL = process.env.API_URL || "https://backend-nelsonroas-bloxtek-production.up.railway.app/api/auth/";;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
console.log("API DE URL LEIDA DESDE EL SERVIDOR NEXT1 "+process.env.API_URL);
export default api;
