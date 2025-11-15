import axios from "axios";
import { Category } from "./utils";

const BASE_URL = "https://server.intensivecode.se/api/categories";

export function getCategories() {
  return axios.get<Category[]>(BASE_URL);
}
