import { Injectable, HttpCode } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './auth.model';
import * as bcrypt from 'bcrypt';
import { Op } from 'sequelize';

import { generateJwtToken } from '../utils/generateJWT';
import { successResponse, errorResponse } from '../utils/responsesUtil';
@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User)
    private authModel: typeof User,
  ) {}

  public async signUp(signUpDTO) {
    try {
      const {
        password,
        email_address,
        phone_number,
        firstName,
        lastName,
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
      return successResponse({ auth, token }, 'User created successfully');
    } catch (error) {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ signUp ~ error',
        error,
      );
      if (error?.errors[0]?.message) {
        return errorResponse({}, error?.errors[0]?.message);
      }
      return errorResponse({}, error.original.code);
    }
  }

  public async signIn(signInDTO) {
    const { email_address, password } = signInDTO;
    try {
      const auth = await this.authModel.findOne({
        where: { email_address },
      });
      if (!auth) {
        return errorResponse({}, 'Please, provide valid credentials');
      }
      const isValid = await bcrypt.compare(password, auth.password);
      if (!isValid) {
        return errorResponse({}, 'Please, provide valid credentials');
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
      return errorResponse({}, error.original.code);
    }
  }

  public async resetPass(resetPassDTO) {
    try {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ resetPassword ~ sucess',
      );

      return successResponse({}, 'Password reset successfully');
    } catch (error) {
      console.log(
        '🚀 ~ file: auth.service.ts ~ AuthService ~ resetPassword ~ error',
      );
      return errorResponse({}, error.original.code);
    }
  }
}
