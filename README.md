# 📚 Book Tracker – Gestión de Libros

Aplicación web desarrollada con **React** para registrar, editar y eliminar libros. Permite gestionar información básica como título, autor, género, año y estado de lectura.

---

## 🚀 Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hook Form](https://react-hook-form.com/)
- [SweetAlert2](https://sweetalert2.github.io/)
- [Retool API](https://retoolapi.dev/) para simular backend

---

## 📂 Estructura del proyecto

```
/frontend/book-tracker
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── BookForm.jsx
│ │ └── BookList.jsx
│ ├── hooks/
│ │ ├── useFetchData.jsx
│ │ └── useSaveData.jsx
│ ├── pages/
│ │ ├── Dashboard.jsx
│ │ └── WelcomePage.jsx
│ ├── utils/
│ │ ├── ApiUrl.jsx
│ │ └── librosApi.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── index.html
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```


## 📥 Instalación

```bash
# Clona el repositorio
git clone https://github.com/tu_usuario/book-tracker.git

# Entra al proyecto
cd frontend
cd book-tracker

# Instala dependencias
npm install
```

---

## 📦 Dependencias del proyecto

Instala estas dependencias dentro de la carpeta:

```bash
cd frontend
cd book-tracker

npm install react react-dom react-router-dom react-hook-form sweetalert2

## 🖥️ Modo desarrollo

```bash
npm run dev
```

---

## 🔒 Ruta protegida

Para acceder al panel de libros (Dashboard):

1. Inicia desde `Welcome.jsx` y presiona el botón de entrar.
2. Se guarda un token en `localStorage` y te lleva al dashboard.
3. Si intentás ir a `/dashboard` sin haber presionado el botón, serás redirigido a inicio.

---

## 🌐 Demo API

Se usa una API simulada desde [Retool API](https://retoolapi.dev/):

```
https://retoolapi.dev/ns36JG/libros
```
