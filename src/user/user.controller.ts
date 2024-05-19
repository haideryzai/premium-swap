import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiUnauthorizedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiExtraModels,
} from '@nestjs/swagger';
import { User } from './user.model';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({
    description: 'The request body is invalid.',
  })
  @ApiUnauthorizedResponse({ description: 'The user is not authorized.' })
  @ApiForbiddenResponse({ description: 'The user is forbidden.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @ApiInternalServerErrorResponse({
    description: 'An error occurred while creating the record.',
  })
  @Post('signup')
  async signUp(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.userService.create(username, password);
  }
}
