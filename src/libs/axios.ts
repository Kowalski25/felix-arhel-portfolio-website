import { Config } from "@config";
import axios from "axios";

const instance = axios.create({
  baseURL: Config.baseUrl,
});

export default instance;
