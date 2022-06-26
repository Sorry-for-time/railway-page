import axios from "axios";
import nProgress from "nprogress";

const baseURL: string = "/mock";

const mockApi = axios.create({
  baseURL,
  timeout: 7000,
});

mockApi.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

mockApi.interceptors.response.use(
  (res) => {
    nProgress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error(JSON.stringify(error.data)));
  }
);

export { mockApi };
