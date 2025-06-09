import { useState } from "react";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

function Dashboard() {
  const [refreshKey, setRefreshKey] = useState(0); 

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1); 
  };

  const handleLogout = () => {
    localStorage.removeItem("authorized");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-700">
            Gestión de libros
          </h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded shadow text-sm"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <BookForm onUpdate={handleRefresh} />
        </div>

        <BookList refresh={refreshKey} />
      </div>
    </div>
  );
}

export default Dashboard;
