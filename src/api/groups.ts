import { CancelToken } from "axios";
import { Group } from "../models/Groups";
import { BASE_URL, get } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups";
}

export interface GroupResponse {
  data: Group[];
}

export const fetchGroups = (data: GroupRequest, token?: CancelToken) => {
  const url = BASE_URL + "/groups";
  return get<GroupResponse>(url, {
    params: data,
    cancelToken: token,
  });
};
