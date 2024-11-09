// src/services/getListItem.ts
import Api from "../services/api";
import { PaginatedItemsResponse } from "../interfaces/item/PaginatedItemsResponse";

export async function getListItem(limit: number, lastKey?: string): Promise<PaginatedItemsResponse> {
    try {
        const api = await Api.getInstance();
        const response = await api.get<void, PaginatedItemsResponse>({
            url: "/items", // Solo especifica la ruta base
            params: {
                limit, // Axios añadirá esto como ?limit=10 en la URL automáticamente
                ...(lastKey && { lastKey }) // Añade lastKey solo si está definido
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los items con paginación:", error);
        throw error;
    }
}