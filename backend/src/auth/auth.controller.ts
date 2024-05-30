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
import { User } from './auth.model';

// service
import { AuthService } from './auth.service';

// dto
import { SignUpDTO } from './dtos/signup.dto';
import { SignInDTO } from './dtos/signin.dto';
import { ResetPassDTO } from './dtos/resetpass.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('signup')
  async signUp(@Body() SignUpDTO: SignUpDTO): Promise<any> {
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ signUp:');
    const result = await this.AuthService.signUp(SignUpDTO);

    return result;
  }

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('signin')
  async signIn(@Body() signInDTO): Promise<any> {
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ signIn:');
    const result = await this.AuthService.signIn(signInDTO);
    return result;
  }

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('resetpass')
  async resetPass(@Body() resetPassDTO): Promise<any> {
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ resetPass:');
    const result = await this.AuthService.resetPass(resetPassDTO);
    return result;
  }
}
