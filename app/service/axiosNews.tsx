import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8080/", // URL base de tu backend
  withCredentials: true, // Incluye cookies para autenticación si es necesario
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;

