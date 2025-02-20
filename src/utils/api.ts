import axios from "axios";
import { API_URL } from "./config"; // Importamos la URL desde config.ts

const api = axios.create({
  baseURL: API_URL, // Ahora la URL viene del servidor
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
