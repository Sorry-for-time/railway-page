import axios from "axios";
import { AxiosInstance } from "axios";

const apiManager: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
  responseEncoding: "utf8",
  withCredentials: false,
});

// 请求拦截器配置
apiManager.interceptors.request.use((request) => {
  // write your config here...
  return request;
});

// 响应拦截器配置
apiManager.interceptors.response.use((response) => {
  // write your config here...
  return response;
});

export { apiManager };
