import axios from "axios";
let Api;

Api = axios.create({
  // baseURL: "http://127.0.0.1:3000/",
  baseURL: "http://192.168.1.51:3000/",
});

Api.defaults.headers.common["Cache-Control"] = "no-cache";
Api.defaults.headers.common["content-type"] = "application/json";

export default Api;
