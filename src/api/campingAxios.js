import axios from "axios";
import { camping_baseURL } from "../config";

const instance = axios.create({
  baseURL: camping_baseURL,
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
});

export default instance;
