import {User} from "./user.type";
import {RoleService} from "../role/RoleService";

const users: User[] = [
  { id: 1, login: 'god', roles: [], groupId: 1 },
  { id: 2, login: 'mike', roles: [], groupId: 1 },
  { id: 3, login: 'bob', roles: [], groupId: 2 },
];

export class UserService {
  constructor(private readonly roleService: RoleService) {}

  getUsersByGroupId(groupId: number): User[] {
    return users
      .filter((user) => user.groupId === groupId)
      .map((user) => {
        user.roles = this.roleService.getRolesByUserId(user.id);
        return user;
      });
  }
}
