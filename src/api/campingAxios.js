import axios from "axios";
import { camping_baseURL } from "../config";

const instance = axios.create({
  baseURL: camping_baseURL,
});

export default instance;
