import axios from "axios";

import { BASE_URL } from "./env";

const httpClient = axios.create({
  baseURL: BASE_URL,
});

export default httpClient;
