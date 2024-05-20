import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';
import { Op } from 'sequelize';

import { generateJwtToken } from '../utils/generateJWT';
import { successResponse, errorResponse } from '../utils/responsesUtil';
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  public async signUp(signUpDTO) {
    try {
      const {
        username,
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
        user_type,
      } = signUpDTO;
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = await this.userModel.create({
        username,
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
        user_type,
      });

      const token = generateJwtToken({
        id: user.id,
        username: user.username,
        user_type: user.user_type,
      });
      console.log('🚀 ~ file: user.service.ts ~ UserService ~ signUp ~ sucess');
      return successResponse({ user, token }, 'User created successfully');
    } catch (error) {
      console.log(
        '🚀 ~ file: user.service.ts ~ UserService ~ signUp ~ error',
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
      const user = await this.userModel.findOne({
        where: { email_address },
      });
      if (!user) {
        return errorResponse({}, 'Please, provide valid credentials');
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return errorResponse({}, 'Please, provide valid credentials');
      }
      const token = generateJwtToken({
        id: user.id,
        username: user.username,
        user_type: user.user_type,
      });
      console.log('🚀 ~ file: user.service.ts ~ UserService ~ signIn ~ sucess');
      return successResponse({ user, token }, 'User logged in successfully');
    } catch (error) {
      console.log('🚀 ~ file: user.service.ts ~ UserService ~ signIn ~ error');
      return errorResponse({}, error.original.code);
    }
  }
}
