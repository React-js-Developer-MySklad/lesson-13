import {UserRole} from "../role/role.type";


export type User = {
  id: number;
  login: string;
  roles: UserRole[];
  groupId: number;
};
