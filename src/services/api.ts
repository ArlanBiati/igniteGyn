import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.110:3333',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    if (axios.isAxiosError(error)) {
      return Promise.reject(error);
    }
  }
);

export { api };
