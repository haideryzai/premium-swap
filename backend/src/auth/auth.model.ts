import {
  Column,
  DataType,
  Model,
  Table,
  Unique,
  HasMany,
  BelongsToMany,
  ForeignKey,
  PrimaryKey,
  AutoIncrement,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  email_address: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  email_verified: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone_verified: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  state: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  zip: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  country: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  user_type: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  updatedAt: Date;
}
