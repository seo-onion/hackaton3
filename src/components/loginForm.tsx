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
		<section className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Ingresar a tienda</h1>
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
      
      {/* Username Field */}
      <div className="flex flex-col">
        <label htmlFor="username" className="text-gray-700 font-medium mb-2">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
          className="h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 placeholder-gray-400"
          placeholder="Enter your username"
        />
      </div>

      {/* Password Field */}
      <div className="flex flex-col">
        <label htmlFor="password" className="text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 placeholder-gray-400"
          placeholder="Enter your password"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 h-12 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-600 transition-colors"
      >
        Iniciar Sesión
      </button>
    </form>

    {/* Error and Success Messages */}
    {error && <div className="mt-4 text-red-500">{error}</div>}
    {successMessage && <div className="mt-4 text-green-500">{successMessage}</div>}
  </div>
</section>

	);
}
