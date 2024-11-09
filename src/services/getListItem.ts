// src/services/getListItem.ts
import Api from "../services/api";
import { PaginatedItemsResponse } from "../interfaces/item/PaginatedItemsResponse";

export async function getListItem(limit: number, lastKey?: string): Promise<PaginatedItemsResponse> {
    try {
        const api = await Api.getInstance();
        const response = await api.get<void, PaginatedItemsResponse>({
            url: "/items",
            params: {
                limit, 
                ...(lastKey && { lastKey }) // Incluye lastKey solo si está definido
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener los items con paginación:", error);
        throw error;
    }
}
