// src/services/cartService.ts
import Api from "./api";

interface CartResponse {
    products: { itemId: string; qty: number }[];
}

export const addItemToCart = async (itemId: string, userId: string): Promise<void> => {
    const api = await Api.getInstance();
    await api.put({
        url: "/cart",
        data: { itemId, userId },
    });
};

export const getUserCart = async (userId: string): Promise<CartResponse> => {
    const api = await Api.getInstance();
    const response = await api.get<void, CartResponse>({
        url: `/cart/${userId}`,
    });
    return response.data;
};

export const updateCartItem = async (itemId: string, qty: number, userId: string): Promise<void> => {
    const api = await Api.getInstance();
    await api.put({
        url: "/cart",
        data: { itemId, userId, qty },
    });
};
