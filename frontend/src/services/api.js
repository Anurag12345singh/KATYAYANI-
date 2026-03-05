import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000",
});

export const loginUser = (data) => API.post("/auth/login", data);

export const registerUser = (data) => API.post("/auth/register", data);

export const getTasks = () => API.get("/tasks");

export const createTask = (data) => API.post("/tasks", data);

export const updateTask = (id, data) => API.put(`/tasks/${id}`, data);

export const deleteTask = (id) => API.delete(`/tasks/${id}`);