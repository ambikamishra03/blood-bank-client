import axios from 'axios';

// Create an axios instance with a base URL
const API = axios.create({ baseURL: process.env.REACT_APP_BASEURL });

// Add a request interceptor
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem('token');
    if (token) {
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    // Handle the error here
    return Promise.reject(error);
  }
);

export default API;
