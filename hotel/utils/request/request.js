import axios from "axios";
const configuredUrl = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});

export default configuredUrl;
