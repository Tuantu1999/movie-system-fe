import type { LoginRequest } from "@/models/auth/LoginRequest";
import { api } from "./http";
import type { Auth } from "@/models/auth/Auth";

export const authService = {
  // Login
  login(credentials: LoginRequest) {
    return api.post<any, Auth>("/auth/login", credentials);
  },

  // Logout
  logout() {
    return api.post<any, any>("/auth/logout");
  },

  // Get current user
  getCurrentUser() {
    return api.get<any, any>("/auth/me");
  },

  // Register
  register(data: LoginRequest & { name: string }) {
    return api.post<any, any>("/auth/register", data);
  },
};
