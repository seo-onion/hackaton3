import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



interface ButtonProps {
	message: string; 
	to: string
}

export default function Button(props:ButtonProps) {
	const location = useLocation();
	const navigate = useNavigate();
	const buttonStyle =
		location.pathname == props.to
			? "bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold"
			: "bg-secondary";

	function handleClick() {
		navigate(props.to);
	}

	return (
		<button
			className={`${buttonStyle} py-2 px-4 rounded-lg transition-colors`}
			onClick={handleClick}
		>
			{props.message}
		</button>
	);
}