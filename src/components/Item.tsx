// Item.tsx
import React from "react";
import { ItemResponse } from "../interfaces/item/ItemResponse";

interface ItemProps {
    item: ItemResponse;
}

const Item: React.FC<ItemProps> = ({ item }) => {
    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "8px" }}>
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <p>Descripción: {item.description}</p>
            {/* Puedes agregar más información del item aquí si es necesario */}
        </div>
    );
};

export default Item;