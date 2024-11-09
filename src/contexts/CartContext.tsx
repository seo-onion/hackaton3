// src/contexts/CartContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { addItemToCart, getUserCart, updateCartItem } from '../services/car';
import { ItemResponse } from '../interfaces/item/ItemResponse';

interface CartItem {
    itemId: string;
    qty: number;
}

interface CartContextType {
    cart: CartItem[];
    addItem: (itemId: string, userId: string) => Promise<void>;
    updateItem: (itemId: string, qty: number, userId: string) => Promise<void>;
    fetchCart: (userId: string) => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = async (itemId: string, userId: string) => {
        await addItemToCart(itemId, userId);
        await fetchCart(userId); // Actualiza el carrito después de agregar un ítem
    };

    const updateItem = async (itemId: string, qty: number, userId: string) => {
        await updateCartItem(itemId, qty, userId);
        await fetchCart(userId); // Actualiza el carrito después de actualizar un ítem
    };

    const fetchCart = async (userId: string) => {
        const userCart = await getUserCart(userId);
        setCart(userCart.products);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, updateItem, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser utilizado dentro de CartProvider');
    }
    return context;
};
