// ItemList.tsx
import React, { useEffect, useState, useCallback } from "react";
import { getListItem } from "../services/getListItem";
import { ItemResponse } from "../interfaces/item/ItemResponse";
import Item from "./Item";
import { useAuthContext } from "../contexts/AuthContext";
import { CartProvider } from "../contexts/CartContext";

const ItemList: React.FC = () => {
    const { session } = useAuthContext();
    const [items, setItems] = useState<ItemResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [lastKey, setLastKey] = useState<string | null>(null); // Última clave para paginación
    const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false); // Carga adicional

    const fetchItems = useCallback(async (isLoadMore = false) => {
        if (!session) {
            setError("No session available.");
            return;
        }

        try {
            if (isLoadMore) {
                setIsLoadingMore(true);
            } else {
                setLoading(true);
            }

            const response = await getListItem(10, lastKey); // Obtenemos 10 items
            setItems((prevItems) => [...prevItems, ...response.items]); // Agrega nuevos items a la lista existente
            setLastKey(response.lastKey || null); // Actualiza `lastKey` para la próxima carga

            if (isLoadMore) {
                setIsLoadingMore(false);
            } else {
                setLoading(false);
            }
        } catch (error) {
            console.error("Error al obtener los items con paginación:", error);
            setError("Error al obtener los items.");
            setLoading(false);
            setIsLoadingMore(false);
        }
    }, [lastKey, session]);

    useEffect(() => {
        // Cargar los primeros elementos
        fetchItems();
    }, [session]);

    // Detectar el final de la página para cargar más elementos
    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 200
            ) {
                if (!isLoadingMore && lastKey) {
                    fetchItems(true); // Carga más elementos
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isLoadingMore, lastKey, fetchItems]);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <CartProvider />
            <h2>Lista de Productos</h2>
            {items.length > 0 ? (
                items.map((item) => <Item key={item.itemId} item={item} />)
            ) : (
                <p>No hay productos disponibles.</p>
            )}
            {isLoadingMore && <p>Cargando más productos...</p>}
            
        </div>
        
    );
};

export default ItemList;
