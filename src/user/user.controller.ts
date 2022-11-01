import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  public create(@Body() user: User): User {
    const userCreated = this.userService.create(user);

    return userCreated;
  }
}
