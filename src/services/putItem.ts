import Api from "../services/api"; // Asegúrate de tener la instancia de Api configurada
import { ItemUpdateRequest } from "../interfaces/item/ItemUpdateRequest";

interface UpdateItemResponse {
    message: string; // Mensaje de respuesta de la API
}

export async function updateItem(itemUpdateRequest: ItemUpdateRequest): Promise<UpdateItemResponse> {
    try {
        const api = await Api.getInstance();
        
        const response = await api.put<ItemUpdateRequest, UpdateItemResponse>(itemUpdateRequest, {
            url: `/item`, // Mantén la URL sin cambiar
        });

        return response.data;
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        throw error;
    }
}

