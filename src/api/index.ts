import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

export default apiClient;
