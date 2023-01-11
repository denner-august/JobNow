import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL
    ? process.env.NEXT_PUBLIC_URL
    : "http://localhost:3000/",
});
