import axios from "axios";
import { useAuth } from "/src/common_user/hooks/useAuth.jsx";

export const api = axios.create({
  baseURL: "http://192.168.2.59:8000/api",
});

export const apiAuth = ({ method, url, data, headers, body }) => {
  return axios({
    baseURL: "http://192.168.2.59:8000/api",
    method,
    url,
    data,
    headers: {
      ...headers,
      ["x-access-token"]: localStorage.getItem("x-access-token"),
    },
    // body,
  }).catch((err) => {
    console.log(err);
    if (err.response.data.message === "Permiso denegado") {
      const { logOut } = useAuth();
      logOut();
    }
  });
};
