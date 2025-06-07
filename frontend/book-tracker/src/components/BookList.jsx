import { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../utils/librosApi";
import BookForm from "./BookForm";
import Swal from "sweetalert2";

function BookList({ refresh }) {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  const fetchBooks = async () => {
    const data = await getBooks();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, [refresh]);

  const handleDelete = async (id) => {
    await deleteBook(id);
    Swal.fire("Eliminado", "Libro eliminado correctamente", "info");
    fetchBooks();
  };

  return (
    <div className="w-full">
      {editingBook && (
        <div className="mb-6 bg-white p-4 rounded shadow">
          <BookForm
            defaultValues={editingBook}
            onUpdate={() => {
              setEditingBook(null);
              fetchBooks();
            }}
          />
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl p-5 shadow-md border border-orange-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-orange-700 mb-2">
              {book.libro}
            </h3>
            <p className="text-sm text-gray-600">
              <strong>Autor:</strong> {book.autor}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Género:</strong> {book.genero}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Año:</strong> {book.año}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Estado:</strong> {book.estado}
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setEditingBook(book)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
