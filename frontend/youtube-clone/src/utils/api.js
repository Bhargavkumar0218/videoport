import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const login = (userData) => API.post("/auth/login", userData);
export const signup = (userData) => API.post("/auth/signup", userData);
export const getFavorites = (token) => API.get("/videos/favorites", { headers: { Authorization: `Bearer ${token}` } });
export const addToFavorites = (token, video) => API.post("/videos/favorites", video, { headers: { Authorization: `Bearer ${token}` } });
export const removeFromFavorites = (token, id) => API.delete(`/videos/favorites/${id}`, { headers: { Authorization: `Bearer ${token}` } });
