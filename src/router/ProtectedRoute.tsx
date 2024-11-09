import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export function ProtectedRoute() {
    const auth = useAuthContext();

    if (!auth) {
        throw new Error("ProtectedRoute must be used within an AuthProvider");
    }

    if (auth.isLoading) return null;

    if (!auth.session) {
        return <Navigate to="/auth/login" replace />;
    }

    return <Outlet />;
}
