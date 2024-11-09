import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();
	return (
		<>
			<h1 id="notFound" className="text-2xl">
				404 - Page Not Found
			</h1>
			<button id="historyBack" onClick={() => navigate(-1)}>
				Back
			</button>
		</>
	);
}
