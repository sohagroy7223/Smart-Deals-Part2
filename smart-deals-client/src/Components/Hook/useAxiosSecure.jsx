import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { use } from "react";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  //   console.log(user);
  // do something before request is sent
  instance.interceptors.request.use((config) => {
    config.headers.Authorization = `bearer ${user.accessToken}`;
    return config;
  });

  return instance;
};

export default useAxiosSecure;
