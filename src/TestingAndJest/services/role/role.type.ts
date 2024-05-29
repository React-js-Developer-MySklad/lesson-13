export type UserRole = 'admin' | 'support' | 'customer';

export type Role = {
  role: UserRole;
  userId: number;
};
