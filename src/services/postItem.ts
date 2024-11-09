import Api from "../services/api"; // Suponiendo que tienes una instancia de API configurada con axios
import { ItemRequest } from "../interfaces/item/ItemRequest"; // Importa la interfaz

interface CreateItemResponse {
    itemId: string;
    message: string;
}

export async function createItem(itemRequest: ItemRequest): Promise<CreateItemResponse> {
    try {
        const api = await Api.getInstance(); // Obtén una instancia de Api
        const response = await api.post<ItemRequest, CreateItemResponse>(itemRequest, {
            url: "/item"
        });
        return response.data;
    } catch (error) {
        console.error("Error al crear el item:", error);
        throw error;
    }
}