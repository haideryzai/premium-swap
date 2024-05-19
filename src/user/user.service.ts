import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import * as bcrypt from 'bcrypt';

import { generateJwtToken } from '../utils/generateJWT';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  public async signUp(signUpDTO) {
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
    return { user, token };
  }
}
