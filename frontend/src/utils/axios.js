import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? '' : 'http://localhost:8000',
});

// 요청 보내기전 뭔가 하고 싶을 때
axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axiosInstance;
