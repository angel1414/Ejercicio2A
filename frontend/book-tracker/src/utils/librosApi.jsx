import { API_URL } from "./ApiUrl";

// CRUD

export const getBooks = async () => {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
};

export const saveBook = async (data) => {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateBook = async (id, data) => {
  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const deleteBook = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
