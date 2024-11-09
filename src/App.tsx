import './App.css'
// import Navbar from "../components/Navbar";
// import DashboardPage from "../pages/DashboardPage";
// import EditProfilePage from "../pages/EditProfilePage";
// import EditVehiclePage from "../pages/EditVehiclePage";

// import NotFoundPage from "../pages/NotFoundPage";

import { Navigate, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {

  return (
    <>
    			<Router>

				<Routes>
					<Route path="/" element={<Navigate to="/auth/login" replace />} />
					<Route path="/auth/login" element={<LoginPage />} />
					<Route path="/auth/register" element={<RegisterPage />} />
					{/* <Route path="/dashboard" element={<DashboardPage />} />
					<Route path="/profile/edit" element={<EditProfilePage />} />
					<Route path="/vehicle/edit" element={<EditVehiclePage />} />
					<Route path="*" element={<NotFoundPage />} /> */}
				</Routes>
			</Router></>
  )
}

export default App
