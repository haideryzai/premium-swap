import { Injectable } from '@nestjs/common';

// db
const users = [
  { id: 1, firstName: 'John', lastName: 'Doe' },
  { id: 2, firstName: 'Jane', lastName: 'Doe' },
  { id: 3, firstName: 'Bob', lastName: 'Doe' },
];

@Injectable()
export class UsersService {
  public getAllUsers() {
    return users;
  }

  public getUserById(id: number) {
    return users.filter((user) => {
      return user.id == id;
    });
  }

  public updateUser(id: number) {
    const theUser = users.filter((user) => {
      return user.id == id;
    });
    theUser[0].firstName = 'updated';
    return theUser;
  }
}
