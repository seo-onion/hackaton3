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
			navigate("/main");
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
			<section>
				<Button message="Iniciar Sesión" to="/auth/login" />
				<Button message="Registrarse" to="/auth/register" />
			</section>

			<article>
				<section>
					<h1>¡Bienvenido!</h1>
					<p>Regístrate para empezar con Uber</p>
				</section>

				<RegisterForm onSubmit={handleRegister} />
			</article>

			{error && <div>{error}</div>}
		</main>
	);
}