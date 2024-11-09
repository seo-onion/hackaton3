import { useAuthContext } from "../contexts/AuthContext"
import { RegisterRequest } from "../interfaces/auth/RegisterRequest";
import { ChangeEvent, FormEvent, useState } from "react";


interface RegisterFormProps {
    onSubmit: (formData: RegisterRequest) => void;
}

export default function RegisterForm({ onSubmit }: RegisterFormProps) {
    const [formData, setFormData] = useState<RegisterRequest>({
        username: "",
        password: "",
        role: ""
    });

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <section>
            <h1>Registro</h1>
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

                <div>
                    <label htmlFor="role">Role</label>
                    <input
                        type="text"
                        name="role"
                        id="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">
                    Register
                </button>
            </form>
        </section>
    );
}