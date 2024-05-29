import { User } from 'src/pages/Lessons/TestingAndJest/services/user/user.type';

export type Group = {
  id: number;
  name: string;
  users: User[];
};
