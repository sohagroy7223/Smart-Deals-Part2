import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { use, useEffect } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  useEffect(() => {
    //request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      config.headers.Authorization = `bearer ${user.accessToken}`;
      return config;
    });
    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [user]);

  return instance;
};

export default useAxiosSecure;
