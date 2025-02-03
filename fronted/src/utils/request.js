import axios from "axios";

// const isProd = process.env.NODE_ENV === "production";

export const request = axios.create({
  baseURL: '/api',  
  timeout: 5000,
});

