import { AuthResponse } from "../interfaces/auth/AuthResponse";
import { RegisterRequest } from "../interfaces/auth/RegisterRequest";
import Api from "../services/api";

export async function register(registerRequest: RegisterRequest) {
    const api = await Api.getInstance();
    const response = await api.post<RegisterRequest, AuthResponse>(registerRequest, {
        url: "/auth/register", // La ruta de registro del backend
    });
    api.authorization = response.data.token; // Guarda el token en la instancia de API
    return response;
}