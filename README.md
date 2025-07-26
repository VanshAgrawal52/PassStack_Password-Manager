# 🔐 PassStack

> Built to protect. Designed to remember.

**PassStack** is a modern, lightweight password manager built using **React + TailwindCSS**. It comes in two powerful variants:

- 💾 **Local Storage Version** — fully offline, browser-based storage  
- 🌐 **MongoDB Version** — full-stack with Express backend and MongoDB database  

---

## 📸 Preview

![Preview](./public/preview.png)

---

## 🧠 Project Variants

### 1. 📦 PassStack – Local Storage

- Passwords are saved in browser localStorage  
- 100% offline  
- Ideal for personal or demo usage  
- No database or backend  

### 2. 🌐 PassStack – MongoDB

- Passwords are stored in a MongoDB database  
- Fully functional Express.js backend  
- API-based CRUD operations  
- Scalable for production use  

---

## 📁 Folder Structure

```
PassStack/
├── PassStack - Local Storage/
│   ├── public/
│   │   ├── favicon.png
│   │   ├── preview.png
│   │   └── icons/
│   │       ├── eye.png
│   │       ├── eyecross.png
│   │       ├── github.svg
│   │       └── heart.png
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/logo.png
│   │   └── components/
│   │       ├── Footer.jsx
│   │       ├── Manager.jsx
│   │       └── Navbar.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js

├── PassStack - MongoDB/
│   ├── backend/
│   │   ├── .env
│   │   ├── server.js
│   │   ├── package.json
│   │   └── package-lock.json
│   ├── public/
│   │   ├── favicon.png
│   │   ├── preview.png
│   │   └── icons/
│   │       ├── eye.png
│   │       ├── eyecross.png
│   │       ├── github.svg
│   │       └── heart.png
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   ├── assets/logo.png
│   │   └── components/
│   │       ├── Footer.jsx
│   │       ├── Manager.jsx
│   │       └── Navbar.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
```

---

## 🚀 Features

- 🔐 Add, edit, delete saved passwords  
- 📋 One-click copy functionality  
- 👁️ Password visibility toggle  
- 🌈 Gradient background and soft UI  
- 🔔 Real-time toast notifications  
- 🔗 MongoDB/Express backend (in full-stack version)  

---

## ⚙️ Setup Instructions

### 🔹 For Local Storage Version

```bash
cd "PassStack - Local Storage"
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

### 🔸 For MongoDB Version

#### 1. Backend Setup

```bash
cd "PassStack - MongoDB/backend"

# Create .env file
# Example:
# MONGO_URI=mongodb://localhost:27017
# DB_NAME=PassStack

npm install
node server.js
```

Runs at: `http://localhost:3000`

#### 2. Frontend Setup

```bash
cd "../"  # back to PassStack - MongoDB
npm install
npm run dev
```

Runs at: `http://localhost:5173`

> ⚠️ Ensure MongoDB is running locally before launching the app.

---

## 📡 API Endpoints (MongoDB)

| Method | Endpoint | Description             |
|--------|----------|-------------------------|
| GET    | `/`      | Fetch all passwords     |
| POST   | `/`      | Add new password        |
| DELETE | `/`      | Delete password by `id` |

---

## 🛠 Tech Stack

**Frontend:**

- React  
- Tailwind CSS  
- Vite  
- React Toastify  
- Lordicon animations  
- UUID  

**Backend (MongoDB Version):**

- Node.js  
- Express.js  
- MongoDB Native Driver  
- dotenv  
- body-parser  
- cors  

---

## 🙋‍♂️ Author

Crafted with 💻 by [Vansh Agrawal](https://github.com/VanshAgrawal52)

---

## 🧾 License

This project is licensed under the [MIT License](LICENSE)

---

## 💡 Final Note

Choose the version that fits your need:

- For offline use → **Local Storage Version**
- For database storage → **MongoDB Version**

**PassStack** — Built to protect. Designed to remember.