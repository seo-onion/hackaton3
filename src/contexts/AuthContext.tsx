import useStorageState from "../hooks/useStorageState";
import { LoginRequest } from "../interfaces/auth/LoginRequest";
import { RegisterRequest } from "../interfaces/auth/RegisterRequest";
import Api from "../services/api";
import { login } from "../services/login";
import { register } from "../services/register";
import { createContext, ReactNode, useContext } from "react";



interface AuthContextType {
	register: (registerRequest: RegisterRequest) => Promise<void>; // Método de registro
	login: (loginRequest: LoginRequest) => Promise<void>; // Método de login
	logout: () => void; // Método de logout
	session?: string | null; // Token o datos de la sesión
	isLoading: boolean; // Estado de carga
  }
const AuthContext = createContext<AuthContextType | undefined>(undefined);

async function loginHandler(	
	loginRequest: LoginRequest,
	setSession: (value: string) => void,
) {
	const response = await login(loginRequest);
	setSession(response.data.token);
}

async function signupHandler(
	signupRequest: RegisterRequest,
	setSession: (value: string) => void,
) {
	const response = await register(signupRequest);
	setSession(response.data.token);
}

export function AuthProvider(props: { children: ReactNode }) {
	const [[isLoading, session], setSession] = useStorageState("token");
	
	const login = async (loginRequest: LoginRequest) => {
		await loginHandler(loginRequest, setSession);
	};
	const register = async (signupRequest: RegisterRequest) => {
		await signupHandler(signupRequest, setSession);
	};

	const logout = () => {
		setSession(null); // Limpiar la sesión
		Api.getInstance().then((api) => (api.authorization = null)); // Eliminar la autorización del API
	};

	if (session)
		Api.getInstance().then((api) => {
			api.authorization = session;
			console.log('Sesión encontrada y aplicada en API:', session); // Log de sesión
		});

		return (
			<AuthContext.Provider value={{ register, login, logout, session, isLoading }}>
				{props.children}
			</AuthContext.Provider>
		);
}

export function useAuthContext() {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuthContext must be used within an AuthProvider");
	}
	return context;
}