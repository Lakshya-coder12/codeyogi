import { Entity } from "./Entity";

export interface User extends Entity {
  first_name: string;
  middle_name: string;
  last_name: string;
  profile_pic_url: string;
  role: "staff" | "admin";
}
