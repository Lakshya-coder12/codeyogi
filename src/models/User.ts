import { Entity } from "./Entity";

export interface User extends Entity {
  first_name: string;
  middle_name: string;
  last_name: string;
  profile_pic_url: string;
  birth_year?: string;
  birth_month?: string;
  birth_date?: string;
  role: "staff" | "admin";
}
