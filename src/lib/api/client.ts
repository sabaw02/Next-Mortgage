// import axios from "axios";

// export const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: true, 
// });

// apiClient.interceptors.request.use((config) => {
//   const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// @/lib/api/client.ts
import axios from "axios";

// Helper to read a cookie by name (client-side only)
const getCookie = (name: string): string | null => {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
};

export const apiClient = axios.create({
  baseURL: "/api/proxy", // ← proxied through Next.js, fixes CORS
  withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
  // Read from cookie (set by setStaticToken), fallback to localStorage
  const token = getCookie("token") ?? localStorage.getItem("token") ?? null;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});