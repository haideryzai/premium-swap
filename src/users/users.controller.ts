import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

// service functions
import { UsersService } from './users.service';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Get()
  getUserById(@Param('id') id: number) {
    return this.usersService.getUserById(id);
  }
}
