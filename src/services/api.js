import axios from 'axios';
import {BASE_URL} from '../config/config';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Global error interceptor (optional, for consistent error handling)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || 'Something went wrong, please try again later.';
    return Promise.reject(new Error(message));
  }
);

export default api;