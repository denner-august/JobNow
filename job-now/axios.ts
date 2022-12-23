import axios from "axios";

const token = localStorage.getItem("Auth");

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: token ? { Bearer: token } : undefined,
});
