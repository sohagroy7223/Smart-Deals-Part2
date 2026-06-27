import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { use, useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: "http://localhost:3000",
});
const useAxiosSecure = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    //request interceptor
    const requestInterceptor = instance.interceptors.request.use((config) => {
      const token = user.accessToken;
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.status;
        if (status === 401 || status === 403) {
          logOut().then(() => {
            navigate("/login");
          });
        }
      },
    );

    return () => {
      instance.interceptors.request.eject(requestInterceptor);
    };
  }, [user, navigate, logOut]);

  return instance;
};

export default useAxiosSecure;
