import axios from "axios";
import { BASE_URL } from "./base";

export interface UserResponse {}

export const fetchUsers = () => {
  const url = BASE_URL + "/people";
  return axios.get(url);
};

export const fetchOneUser = (id: number) => {
  const url = BASE_URL + "/people/" + id;
  return axios.get(url);
};
