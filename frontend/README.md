# MERN Task Management Portal

## GitHub Repository

https://github.com/Anurag12345singh/KATYAYANI-

---

# Project Overview

This project is a **Task Management Portal** built using the **MERN Stack**.

Users can:

* Login
* Add tasks
* View tasks
* Update task status
* Delete tasks

Each task contains:

* Title (required)
* Description (optional)
* Status (Pending / Completed)
* CreatedAt timestamp

---

# Tech Stack

Frontend

* React
* Axios
* React Router

Backend

* Node.js
* NestJS
* MongoDB
* Mongoose

Other Tools

* Git
* GitHub
* AI tools (ChatGPT)

---

# Folder Structure

Backend

src
├── auth
├── users
├── tasks
├── app.module.ts
└── main.ts

Frontend

src
├── components
├── pages
├── services
├── App.jsx
└── main.jsx

---

# How to Run the Project

## 1 Clone Repository

git clone https://github.com/anurag-singh/task-management-portal.git

cd task-management-portal

---

# Run Backend

cd backend

Install dependencies

npm install

Run server

npm run start:dev

Server will run on

http://localhost:3000

---

# Run Frontend

cd frontend

Install dependencies

npm install

Run project

npm run dev

Frontend will run on

http://localhost:5173

---

# API Endpoints

## Auth APIs

POST /auth/register
Register a new user

POST /auth/login
Login user

---

## Task APIs

POST /tasks
Create new task

GET /tasks
Get all tasks

PUT /tasks/:id
Update task status

DELETE /tasks/:id
Delete task

---

# API Design (NON AI GENERATED)

The API follows a **REST architecture**.

Authentication APIs are separated from Task APIs.

Routes are structured using modules:

* Auth Module
* Users Module
* Tasks Module

Each module contains:

* Controller
* Service
* Schema

Controllers handle HTTP requests.

Services contain business logic.

Schemas define MongoDB database structure.

This modular design improves:

* scalability
* maintainability
* separation of concerns

---

# State Management (NON AI GENERATED)

State management in the frontend is handled using **React useState and useEffect hooks**.

Dashboard component manages the global task list state.

Flow:

1 User opens dashboard
2 useEffect fetches tasks from backend
3 Tasks stored in local state
4 When user adds a task → API call → refresh task list
5 When user updates or deletes a task → API call → refresh state

This approach keeps UI synchronized with the backend database.

---

# AI Prompts Used

Below are the prompts used while developing the project:

Prompt 1
"Generate NestJS backend structure for a task management portal with auth, users, and tasks modules."

Prompt 2
"Create Mongoose schema for task with title, description, status, and createdAt fields."

Prompt 3
"Generate React frontend with components for task form and task list connected to API."

Prompt 4
"Create API service file using Axios to interact with backend endpoints."

---

# What AI Generated

AI helped generate:

* Initial project structure
* NestJS module boilerplate
* React component skeleton
* Axios API setup
* Basic CRUD operations

---

# What I Modified / Implemented

I manually implemented:

* API endpoint structure
* REST API design
* Component integration
* State management logic
* Project folder organization
* Testing and debugging
* UI interaction logic

---

# Future Improvements

* JWT authentication
* Role based access
* Task filtering
* Pagination
* UI improvements using Tailwind
* Docker deployment

---

# Author

Anurag Singh
Full Stack Developer
