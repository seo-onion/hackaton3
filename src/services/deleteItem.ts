import Api from "../services/api"; // Asegúrate de que Api esté configurado correctamente

interface DeleteItemResponse {
    message: string; // Mensaje de respuesta de la API
}

export async function deleteItem(itemId: string): Promise<DeleteItemResponse> {
    try {
        const api = await Api.getInstance(); // Obtén una instancia de Api
        const response = await api.delete<DeleteItemResponse>({
            url: `/item/${itemId}`, // URL con el ID del producto a eliminar
        });
        return response.data;
    } catch (error) {
        console.error("Error al eliminar el item:", error);
        throw error;
    }
}