import {User} from "../user/user.type";


export type Group = {
  id: number;
  name: string;
  users: User[];
};
