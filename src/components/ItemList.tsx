// ItemList.tsx
import React, { useEffect, useState } from "react";
import { getListItem } from "../services/getListItem";
import { ItemResponse } from "../interfaces/item/ItemResponse";
import Item from "./Item";
import { useAuthContext } from "../contexts/AuthContext";

const ItemList: React.FC = () => {
    const { session } = useAuthContext();
    const [items, setItems] = useState<ItemResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchItems() {
            if (!session) {
                setError("No session available.");
                return;
            }
            
            try {
                setLoading(true);
                const response = await getListItem(10); // Obtenemos 10 items
                setItems(response.items); // Almacenamos los items en el estado
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los items:", error);
                setError("Error al obtener los items.");
                setLoading(false);
            }
        }

        fetchItems();
    }, [session]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Lista de Productos</h2>
            {items.length > 0 ? (
                items.map((item) => <Item key={item.itemId} item={item} />)
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

export default ItemList;
