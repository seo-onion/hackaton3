import Api from "../services/api"; // Asegúrate de que Api esté configurado correctamente
import { ItemResponse } from "../interfaces/item/ItemResponse";

export async function getItem(itemId: string): Promise<ItemResponse> {
    try {
        const api = await Api.getInstance(); // Obtén una instancia de Api
        const response = await api.get<void, ItemResponse>({
            url: `/item/${itemId}`, // Endpoint con el ID del producto a obtener
        });
        return response.data;
    } catch (error) {
        console.error("Error al obtener el item:", error);
        throw error;
    }
}