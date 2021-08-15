import { Entity } from "./Entity";
import { User } from "./User";

export interface Group extends Entity {
  name: string;
  group_img_url: string;
  description: string;
  creator: User;
}
