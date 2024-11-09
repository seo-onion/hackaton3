export interface ItemResponse {
    itemId: string;
    title: string;
    price: number;
    // Agrega aquí otros campos que esperas en la respuesta
    // Por ejemplo, si la respuesta incluye "description", "imgUrl", etc.
    description?: string;
    imgUrl?: string;
    isBestSeller?: boolean;
    stars?: number;
    boughtInLastMonth?: number;
}