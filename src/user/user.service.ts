import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private user = [];

  public create(user: User): User {
    this.user.push(user);

    return user;
  }
}
