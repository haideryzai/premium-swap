import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getAllUsers() {
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ];
    return users;
  }

  public getUserById(id: number) {
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 2, firstName: 'Jane', lastName: 'Doe' },
    ];
    return users.find((user) => user.id === id);
  }
}
