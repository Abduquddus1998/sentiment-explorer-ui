import baseApi from "../api/base-api";
import { useMutation } from "@tanstack/react-query";

interface LoginResponse {
  success: boolean;
  error: {
    message: string;
  };
  data: {
    email: string;
    id: string;
    is_active: boolean;
    access_token: string;
    token_type: string;
  };
}

interface LoginData {
  email: string;
  password: string;
}

export async function login(data: LoginData): Promise<LoginResponse> {
  return await baseApi.request("/auth/login", "post", data);
}

export async function register(data: LoginData): Promise<LoginResponse> {
  return await baseApi.request("/auth/register", "post", data);
}

export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });
