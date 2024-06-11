import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import {
  ApiTags,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { Response } from 'express';

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
  async signUp(@Body() SignUpDTO: SignUpDTO, @Res() res: Response): Promise<any> {
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ signUp:');
    const result = await this.AuthService.signUp(SignUpDTO);

    return res.status(result.code).json(result);
  }

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @HttpCode(200)
  @Post('signin')
  async signIn(@Body() signInDTO: SignInDTO, @Res() res: Response): Promise<any> {
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ signIn:');
    const result = await this.AuthService.signIn(signInDTO);
    return res.status(result.code).json(result);
  }

  @ApiTags('Auth')
  @ApiOkResponse({ type: User })
  @ApiBadRequestResponse({ description: 'The request body is invalid.' })
  @ApiNotFoundResponse({ description: 'The resource was not found.' })
  @Post('resetpass')
  async resetPass(@Body() resetPassDTO: ResetPassDTO, @Res() res: Response): Promise<any> {
    const result = await this.AuthService.resetPass(resetPassDTO);
    console.log('🚀 ~ file: auth.controller.ts ~ AuthController ~ resetPass ~ success');
    return res.status(result.code).json(result);
  }
}
