import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/Button";
import RegisterForm from "../components/RegisterForm";
import { RegisterRequest } from "../interfaces/auth/RegisterRequest";
import axios from "axios";

export default function RegisterPage() {
	const navigate = useNavigate();
	const { register } = useAuthContext();
	const [error, setError] = useState<string | null>(null);

	async function handleRegister(formData: RegisterRequest) {
		try {
			console.log("Payload enviado:", formData); // Verificar el payload que se envía
			await register(formData);
			navigate("/dashboard");
		} catch (error) {
			if (axios.isAxiosError(error) && error.response) {
				console.log("Error en el registro:", error.response.data); // Esto debería dar detalles del error
				setError("Error en el registro. Por favor intenta de nuevo.");
			} else {
				console.error("Error inesperado:", error);
				setError("Error inesperado. Por favor intenta de nuevo.");
			}
		}
	}

	return (
		<main>
			<section className="flex justify-center items-center space-x-4 py-4">
			<Button
				message="Iniciar Sesión"
				to="/auth/login"
			/>
			<Button
				message="Registrarse"
				to="/auth/register"
			/>
			</section>

			<article>
			<section className="flex flex-col items-center text-center py-10 bg-gray-50 rounded-lg shadow-lg">
			<h1 className="text-4xl font-extrabold text-gray-800 mb-4">¡Bienvenido!</h1>
			<p className="text-lg text-gray-600">Regístrate para empezar con <span className="font-bold text-blue-600">QImporta</span></p>
			</section>
				<RegisterForm onSubmit={handleRegister} />
			</article>

			{error && <div>{error}</div>}
		</main>
	);
}