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
        <section className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">Registro</h1>
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

      {/* Role Field */}
      <div className="flex flex-col">
        <label htmlFor="role" className="text-gray-700 font-medium mb-2">Role</label>
        <input
          type="text"
          name="role"
          id="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="h-12 px-4 rounded-lg border border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 placeholder-gray-400"
          placeholder="Enter your role"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="mt-6 h-12 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600 transition-colors"
      >
        Register
      </button>
    </form>
  </div>
</section>


    );
}