import axios from "axios";
import { GroupResponseElement } from "../models/Groups";
import { BASE_URL } from "./base";

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
  return axios
    .get<GroupResponse>(url, {
      params: data,
    })
    .then((response) => response.data.data);
};
