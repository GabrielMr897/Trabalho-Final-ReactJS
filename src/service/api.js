import axios from "axios";

const api = axios.create({
  baseURL: "https://api-balacobaco.herokuapp.com/",
});

export default api;
