export interface ItemUpdateRequest {
    itemId: string;           // ID del producto a modificar
    boughtInLastMonth: number; // Cantidad de compras en el último mes
    imgUrl: string;            // URL de la imagen
    isBestSeller: boolean;     // Indica si es un producto más vendido
    price: number;             // Precio del producto
    stars: number;             // Puntuación (0 a 5)
    title: string;             // Nombre del producto
}