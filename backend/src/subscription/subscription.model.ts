import {
    Column,
    DataType,
    Model,
    Table,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
  } from 'sequelize-typescript';
  
  @Table
  export class Subscriptions extends Model<Subscriptions> {
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
    })
    name: string;

    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    description: string;

    @Column({
      type: DataType.ENUM('Basic', 'Standard', 'Premium'),
      allowNull: true,
      defaultValue: 'Basic',
    })
    plan_type: string;

    @Column({
      type: DataType.ENUM("Monthly", "Yearly"),
      allowNull: true,
      defaultValue: 'Monthly',
    })
    duration: string;

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
  