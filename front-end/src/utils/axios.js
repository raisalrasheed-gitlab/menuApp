import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: 'https://menuappbckend.onrender.com/',
});
export default axiosInstance;
