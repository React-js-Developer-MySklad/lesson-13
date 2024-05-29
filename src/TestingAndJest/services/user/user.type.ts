import { UserRole } from 'src/pages/Lessons/TestingAndJest/services/role/role.type';

export type User = {
  id: number;
  login: string;
  roles: UserRole[];
  groupId: number;
};
