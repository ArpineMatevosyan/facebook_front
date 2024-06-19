import axios from "axios";

const axiosGet = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axiosGet.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosGet.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      //  console.log("error =>", error.response.data.error.message);
      return Promise.reject(error.response.data.error.message);
    } else if (error.request) {
      //  console.error("Request error", error.request);
    } else {
      //  console.error("Error", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosGet;
