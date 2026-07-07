import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Create axios instance
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// Request interceptor
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add token from localStorage if exists
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  },
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log("Response:", response.status, response.config.url);
    return response.data;
  },
  (error) => {
    // Handle errors
    if (error.response?.status === 401) {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    if (error.response?.status === 403) {
      console.error("Forbidden:", error.response.data);
    }

    console.error("Response Error:", error.response?.status, error.message);
    return Promise.reject(error.response?.data || error.message);
  },
);
