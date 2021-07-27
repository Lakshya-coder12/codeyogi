import axios from "axios";
import { GroupResponseElement } from "../models/Groups";
import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups";
}

export interface GroupResponse {
  data: GroupResponseElement[];
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return axios
    .get<GroupResponse>(url, {
      params: data,
      headers: { Authorization: token },
    })
    .then((response) => response.data.data)
    .catch((e) => console.error(e));
};
