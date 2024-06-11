import { Injectable, HttpCode } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './auth.model';
import * as bcrypt from 'bcrypt';
import { Op } from 'sequelize';

import { generateJwtToken } from '../utils/generateJWT';
import { successResponse, errorResponse } from '../utils/responsesUtil';
import { SignUpDTO } from './dtos/signup.dto';
import { ResetPassDTO } from './dtos/resetpass.dto';
import { MailerService } from 'src/mailer/mailer.service';
import { SignInDTO } from './dtos/signin.dto';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private authModel: typeof User,
    private mailerService: MailerService,
  ) {
  }

  public async signUp(signUpDTO: SignUpDTO) {
    try {
      const {
        password,
        email_address,
        phone_number,
        firstName,
        lastName,
        username,
        address,
        city,
        state,
        zip,
        country,
        image,
      } = signUpDTO;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const auth = await this.authModel.create({
        password: hashedPassword,
        email_address,
        phone_number,
        firstName,
        lastName,
        username,
        email_verified: false,
        address,
        city,
        state,
        zip,
        country,
        image,
      });

      const token = generateJwtToken({
        id: auth.id,
        email_address: auth.email_address,
        user_type: auth.user_type,
        username: auth.username,
      });
      console.log('🚀 ~ file: auth.service.ts ~ AuthService ~ signUp ~ sucess');
      return successResponse({ auth, token }, 'User created successfully', 201);
    } catch (error) {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ signUp ~ error',
        error.errors,
      );
      if (error.original.code === 'ER_DUP_ENTRY') {
        return errorResponse({}, 'User already exists', 409);
      }
      return errorResponse({}, error, 500);
    }
  }

  public async signIn(signInDTO: SignInDTO) {
    const { email_address, password } = signInDTO;
    try {
      const auth = await this.authModel.findOne({
        where: { email_address },
      });
      if (!auth) {
        return errorResponse({}, 'Please, provide valid credentials', 401);
      }
      const isValid = await bcrypt.compare(password, auth.password);
      if (!isValid) {
        return errorResponse({}, 'Please, provide valid credentials', 401);
      }
      const token = generateJwtToken({
        id: auth.id,
        email_address: auth.email_address,
        user_type: auth.user_type,
        username: auth.username,
      });
      console.log('🚀 ~ file: auth.service.ts ~ AuthService ~ signIn ~ sucess');
      return successResponse({ auth, token }, 'User logged in successfully');
    } catch (error) {
      console.log('🚀 ~ file: auth.service.ts ~ AuthService ~ signIn ~ error');
      return errorResponse({}, error, 500);
    }
  }

  public async resetPass(resetPassDTO: ResetPassDTO) {
    try {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ resetPassword ~ sucess',
      );
      const { email_address } = resetPassDTO;
      await this.mailerService.sendForgotPasswordEmail(email_address);
      return successResponse({}, 'Password reset successfully', 200);
    } catch (error) {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ resetPassword ~ error',
      );
      return errorResponse({}, error, 500);
    }
  }
}
