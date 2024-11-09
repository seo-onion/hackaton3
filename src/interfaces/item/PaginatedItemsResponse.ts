import { ItemResponse } from "../item/ItemResponse"; // Reutiliza la interfaz de los items individuales si ya está definida

export interface PaginatedItemsResponse {
    items: ItemResponse[]; // Array de items
    lastKey?: string;       // Clave para la siguiente página (opcional)
}