import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Navbar() {
	const navigate = useNavigate();
	const { session, logout } = useAuthContext();

	const handleLogout = () => {
		logout(); // Llama a logout del contexto
		navigate("/auth/login"); // Redirige a la página de inicio de sesión
	};

	return (
		<div className="bg-gray-800 h-12 text-white px-10 py-2 flex justify-between items-center">
			<div className="text-2xl font-semibold">MiAplicación</div>
			{session && localStorage.getItem("token") ? (
				<button
					id="logout"
					onClick={handleLogout}
					className="bg-red-500 px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
				>
					Cerrar sesión
				</button>
			) : (
				<button
					onClick={() => navigate("/auth/login")}
					className="bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600 transition duration-200"
				>
					Iniciar sesión
				</button>
			)}
		</div>
	);
}