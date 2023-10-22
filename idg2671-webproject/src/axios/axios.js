import axios from "axios";
import env from "react-dotenv";

//const BASE_URL = "https://webproject-api-production.up.railway.app/"
//const BASE_URL = "http://localhost:3001/"
const BASE_URL = env.API_URL

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json",
  },
  withCredentials: true,
});
