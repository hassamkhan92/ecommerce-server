import { Injectable } from '@nestjs/common';
import { SerializedUsers, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'hassam',
      password: 'hassam',
    },
    {
      username: 'hassan',
      password: 'hassan',
    },
    {
      username: 'hafsa',
      password: 'hafsa',
    },
    {
      username: 'husaimah',
      password: 'husaimah',
    },
  ];
  getUsers() {
    return this.users.map((user) => new SerializedUsers(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
