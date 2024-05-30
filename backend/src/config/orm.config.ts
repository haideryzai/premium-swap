import { SequelizeModuleOptions } from '@nestjs/sequelize';

// models
import { User } from '../auth/auth.model';
import { Subscriptions } from '../subscription/subscription.model';

export const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'haider',
  password: 'password',
  database: 'nest_learn',
  models: [User, Subscriptions],
  synchronize: true,
};
