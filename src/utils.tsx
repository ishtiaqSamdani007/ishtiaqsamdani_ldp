import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
  baseURL: "http://localhost:3004",
});

export default API;
