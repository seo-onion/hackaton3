import Button from "../components/Button";
import LoginForm from "../components/loginForm";

export default function LoginPage() {
	return (
		<main className="flex flex-col items-center min-h-screen bg-gray-50 py-50 px-6">
			{/* Sección de botones de inicio de sesión y registro */}
			<section className="flex gap-4 mb-8">
				<Button
				message="Iniciar Sesión"
				to="/auth/login"
				/>
				<Button
				message="Registrarse"
				to="/auth/register"
				/>
			</section>

			<article className="w-full max-w-3xl flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-6 md:p-10">
				{/* Formulario de inicio de sesión */}
				<div className="w-full md:w-1/2">
				<LoginForm />
				</div>

				{/* Sección de bienvenida */}
				<section className="w-full md:w-1/2 flex flex-col items-center p-6 text-center border-t mt-6 md:mt-0 md:border-t-0 md:border-l border-gray-200">
				<h2 className="text-2xl font-bold text-gray-900 mb-2">Bienvenido de vuelta</h2>
				<p className="text-gray-600">Inicia sesión para empezar a usar Uber</p>
				</section>
			</article>
			</main>

	);
}
