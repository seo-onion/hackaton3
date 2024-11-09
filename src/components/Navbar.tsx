import { Navigate, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
export default function Navbar() {
	const navigate = useNavigate();
	const { session, logout } = useAuthContext();

	const handleLogout = () => {
		logout(); // Llama a logout del contexto
		navigate("/auth/login"); // Redirige a la página de inicio de sesión
	};

	if (localStorage.getItem("token")) {
		return (
			<div className="bg-black h-12 text-white px-10 py-2 flex justify-between">
				<div className="text-2xl">Uber</div>
				<button id="logout" onClick={handleLogout}>
					Logout
				</button>
			</div>
		);
	} else {
		return (
			<div className="bg-black h-12 text-white px-10 py-2 text-2xl">Uber</div>
		);
	}
}