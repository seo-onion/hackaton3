// src/components/Cart.tsx
import React, { useEffect } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuthContext } from '../contexts/AuthContext';

const Cart: React.FC = () => {
    const { session } = useAuthContext();
    const { cart, fetchCart, updateItem } = useCart();

    useEffect(() => {
        if (session) {
            fetchCart(session); // Carga el carrito del usuario al montar el componente
        }
    }, [session, fetchCart]);

    const handleQuantityChange = (itemId: string, newQty: number) => {
        if (session) {
            updateItem(itemId, newQty, session);
        }
    };

    return (
        <div>
            <h2>Mi Carrito</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                cart.map((item) => (
                    <div key={item.itemId}>
                        <p>Producto ID: {item.itemId}</p>
                        <input
                            type="number"
                            value={item.qty}
                            min="1"
                            onChange={(e) => handleQuantityChange(item.itemId, parseInt(e.target.value))}
                        />
                    </div>
                ))
            )}
            <button onClick={() => console.log("Realizar compra")}>Realizar Compra</button>
        </div>
    );
};

export default Cart;
