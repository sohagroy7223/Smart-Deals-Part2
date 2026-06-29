import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://smart-deals-point-11r9jx0nu-sohagroy7223-3827s-projects.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
