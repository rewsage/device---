import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const getContentType = () => {
  return { "Content-Type": "application/json" };
};

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});
