import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  const handleAccess = () => {
    localStorage.setItem("authorized", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-orange-400 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
          Bienvenido a Book Tracker <span role="img" aria-label="libros">📚</span>
        </h1>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Organiza y lleva el control de tus lecturas favoritas
        </p>
        <button
          onClick={handleAccess}
          className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2 rounded shadow transition-all duration-200"
        >
          Iniciar
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;