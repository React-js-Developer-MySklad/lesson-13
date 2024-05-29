import {UserService} from "../user/UserService";
import {Group} from "./group.type";

export class GroupService {
  constructor(private readonly userService: UserService) {}

  getGroupById(id: number): Group {
    return {
      id: 1,
      name: 'Base',
      users: this.userService.getUsersByGroupId(id),
    };
  }
}
