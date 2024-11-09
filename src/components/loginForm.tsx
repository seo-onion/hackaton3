import { LoginRequest } from "../interfaces/auth/LoginRequest";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const { login } = useAuthContext();
	const [formData, setFormData] = useState<LoginRequest>({ username: "", password: "" });
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
	const navigate = useNavigate();

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);
        setSuccessMessage(null);

        try {
            await login(formData);
            setSuccessMessage("Login successful!");
            console.log("Login successful");
	        navigate("/dashboard");
        } catch (error) {
            setError("Login failed. Please try again.");
            console.error("Error during login:", error);
        }
    }

	return (
		<section>
			<h1>Ingresar a tienda</h1>
			<form onSubmit={handleSubmit}>
				<div>
				    <label htmlFor="username">Username</label>
				    <input
				        type="text"
				        name="username"
				        id="username"
				        value={formData.username}
				        onChange={handleChange}
				        required
				    />
				</div>
				<div>
				    <label htmlFor="password">Password</label>
				    <input
				        type="password"
				        name="password"
				        id="password"
				        value={formData.password}
				        onChange={handleChange}
				        required
				    />
				</div>
				<button type="submit">
				    Iniciar Sesión
				</button>
			</form>
			{error && <div>{error}</div>}
			{successMessage && <div>{successMessage}</div>}
		</section>
	);
}
