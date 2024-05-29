import axios from "axios";
import { useAuth } from "/src/common_user/hooks/useAuth.jsx";

export const api = axios.create({
  baseURL: "http://192.168.2.157:8000/api",
})

export const apiAuth = ({ method, url, data, headers }) => {
  return axios({
    baseURL: "http://192.168.2.157:8000/api",
    method,
    url,
    data,
    headers: {
      ...headers,
      ["x-access-token"]: localStorage.getItem("x-access-token"),
    },
  }).catch((err) => {
    console.log(err);
    if (err.response.data.message === "Permiso denegado") {
      const { logOut } = useAuth();
      logOut();
    }
  });
};
