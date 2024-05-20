import { Body, Controller, Post } from '@nestjs/common';
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

// model
import { User } from './user.model';

// service
import { UserService } from './user.service';

// dto
import { SignUpDTO } from './dtos/signup.dto';
import { SignInDTO } from './dtos/signin.dto';

@Controller('api/auth')
export class UserController {
  constructor(private UserService: UserService) {}

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('signup')
  async signUp(@Body() SignUpDTO: SignUpDTO): Promise<any> {
    console.log('🚀 ~ file: user.controller.ts ~ AuthController ~ signUpDto:');
    const result = await this.UserService.signUp(SignUpDTO);

    return result;
  }

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('signin')
  async signIn(@Body() signInDTO): Promise<any> {
    const result = await this.UserService.signIn(signInDTO);
    return result;
  }
}
