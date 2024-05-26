import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { User } from '../auth/auth.model';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'haider',
  password: 'password',
  database: 'nest_learn',
  models: [User],
  synchronize: true,
};
