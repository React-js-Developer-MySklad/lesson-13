
import { UserService } from '../user/UserService';
import { RoleService } from '../role/RoleService';
import {GroupService} from "./GroupService";


jest.mock('../role/RoleService');

describe('GroupService', () => {
  it('should return right users', () => {
    // arrange
    const roleService = new RoleService();
    const userService = new UserService(roleService);
    const groupService = new GroupService(userService);

    // act
    groupService.getGroupById(1);

    // assert
    expect(roleService.getRolesByUserId).toReturnWith([{ role: 'admin', id: 2 }]);
    expect(roleService.getRolesByUserId).toHaveBeenCalledWith(1);
  });
});
