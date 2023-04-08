import axios from "axios";

const baseURL: string = "/mock";

const mockApi = axios.create({
  baseURL,
  timeout: 7000,
});

mockApi.interceptors.request.use((config) => {
  return config;
});

mockApi.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error(JSON.stringify(error.data)));
  }
);

export { mockApi };
