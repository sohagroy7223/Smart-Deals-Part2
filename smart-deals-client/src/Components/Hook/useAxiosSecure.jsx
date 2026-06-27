import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
  // do something before request is sent
  instance.interceptors.request.use((config) => {
    return config;
  });

  return instance;
};

export default useAxiosSecure;
