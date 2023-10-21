import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import axios from "axios";

export const classicAxios = axios.create({
  baseURL: process.env.API_URL,
});

export const getContentType = () => {
  return { "Content-Type": "application/json" };
};

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4200/api",
});
