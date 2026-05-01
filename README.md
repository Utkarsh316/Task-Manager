# 🚀 Team Task Manager (Full Stack MERN)

A full-stack **Team Task Manager** web application where users can create projects, assign tasks, and track progress with **role-based access control (Admin / Member)**.

---

## 📌 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication
* Secure password hashing

### 👥 Role-Based Access

* **Admin**

  * Create projects
  * Create and assign tasks
* **Member**

  * View assigned projects
  * Update task status

### 📁 Project Management

* Create projects
* View all projects
* Project-based task grouping

### ✅ Task Management

* Create tasks
* Assign tasks to projects
* Update task status:

  * Todo
  * In Progress
  * Done

### 📊 Dashboard

* View all projects
* View tasks per project
* Update task progress

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Deployment

* Backend: Railway
* Frontend: Vercel

---

## 📂 Folder Structure

```
team-task-manager/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Utkarsh316/Task-Manager.git
cd Task-Manager
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🌐 API Endpoints

### Auth

* `POST /api/auth/register`
* `POST /api/auth/login`

### Projects

* `GET /api/projects`
* `POST /api/projects`

### Tasks

* `POST /api/tasks`
* `GET /api/tasks/:projectId`
* `PUT /api/tasks/:id`

---

## 🎥 Demo Flow

1. User registers and logs in
2. Admin creates a project
3. Tasks are created under a project
4. Tasks are updated (Todo → Done)
5. Dashboard reflects changes

---

## 📦 Deployment Links

* 🔗 Frontend (Vercel): *Add your link here*
* 🔗 Backend (Railway): *Add your link here*

---

## 💡 Future Improvements

* Team member assignment
* Deadline tracking & overdue alerts
* Better UI/UX (Kanban board)
* Notifications system

---

## 👨‍💻 Author

**Utkarsh Awasthi**

---

## 📄 License

This project is for educational purposes.
