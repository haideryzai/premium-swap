import { Controller } from '@nestjs/common';
import { Get, Patch, Param } from '@nestjs/common';

// service functions
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get('/:id')
  getUserById(@Param('id') id: number) {
    console.log(id);
    return this.usersService.getUserById(id);
  }

  @Patch('/:id')
  updateUser(@Param('id') id: number) {
    return this.usersService.updateUser(id);
  }
}
