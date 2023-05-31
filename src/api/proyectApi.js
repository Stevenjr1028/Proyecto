// Axios
import axios from 'axios';

const projectApi = axios.create({
  baseURL: 'https://backend-production-e84e.up.railway.app/api',
});

projectApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['x-token'] = token;
  }
  return config;
});

export default projectApi;