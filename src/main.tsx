import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { AuthProvider } from "./contexts/AuthContext"; // Envuelve con el AuthProvider
import { CartProvider } from './contexts/CartContext';
import Car from './components/Car';


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <AuthProvider>
          <CartProvider>

            <RouterProvider router={router} />
          
          </CartProvider>
            
        </AuthProvider>
    </React.StrictMode>
);
