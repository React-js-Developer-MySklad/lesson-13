import {Role, UserRole} from "./role.type";


const roles: Role[] = [{ role: 'admin', userId: 1 }];

export class RoleService {

  getRolesByUserId(id: number): UserRole[] {
    return roles.filter((role) => role.userId === id).map((item) => item.role);
  }
}
