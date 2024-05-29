export const RoleService = jest.fn().mockImplementation(() => ({
  getRolesByUserId: jest.fn().mockImplementation((id: number) => [{ role: 'admin', id: 2 }]),
}));
