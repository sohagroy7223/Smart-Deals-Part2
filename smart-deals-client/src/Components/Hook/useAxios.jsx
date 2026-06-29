import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://smart-deals-point.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
