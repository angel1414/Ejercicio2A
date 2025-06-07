const API_URL = "https://retoolapi.dev/ns36JG/libros";

const updateBook = async (id, data) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export function useSaveData() {
  const saveBook = async (data) => {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return { saveBook, updateBook };
}

export const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};