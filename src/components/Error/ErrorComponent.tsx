import { useNavigate } from "react-router-dom";
import "./ErrorComponent.css";
const ErrorComponent = () => {
	const navigate = useNavigate();

	const handleRefresh = () => {
		navigate(0);
	};

	const handleRedirectHome = () => {
		navigate("/");
	};

	return (
		<div className="error-page">
			<div className="error-message">
				<h1 className="error">Oops!!</h1>
				<span>something went wrong.</span>
				<p>
					Please refresh the page or return to the main page. If the
					problem persists, please contact:{" "}
					<a
						className="error-link"
						href="mailto:"
						aria-label="contact us"
						target="_blank"
						rel="noreferrer"
					>
						{import.meta.env.VITE_EMAIL_CONTACT}
					</a>
				</p>
			</div>
			<div className="button-error">
				<button
					className="back-button"
					onClick={handleRefresh}
					aria-label="Refresh page"
				>
					Refresh
				</button>
				<button
					className="refresh-button"
					onClick={handleRedirectHome}
					aria-label="Go Home"
				>
					Go Home
				</button>
			</div>
		</div>
	);
};

export default ErrorComponent;
