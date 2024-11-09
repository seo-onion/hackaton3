import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import { ProtectedRoute } from "./ProtectedRoute";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFoundPage from "../pages/NotFoundPage";
import MainPage from "../pages/MainPage"; // Importa las páginas protegidas

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />, // `App` incluye el navbar y otros componentes comunes
		children: [
			{
				path: "/",
				element: <Navigate to="/auth/login" replace />
			},
			{
				path: "auth",
				children: [
					{
						path: "login",
						element: <LoginPage />,
					},
					{
						path: "register",
						element: <RegisterPage />,
					},
				],
			},
			{
				path: "/",
				element: <ProtectedRoute />,
				children: [
					{
						path: "main",
						element: <MainPage />,
					},

				],
			},
			{
				path: "*",
				element: <NotFoundPage />,
			},
		],
	},
]);
