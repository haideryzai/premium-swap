import {
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  import { ApiProperty } from '@nestjs/swagger';
  export class SubscriptionDTO {
    @ApiProperty({
      description: 'name for the subscription',
    })
    @IsNotEmpty()
    name: string;

    @ApiProperty({
      description: 'description for the subscription',
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
      description: 'plan type for the subscription',
    })
    @IsNotEmpty()
    @IsString()
    plan_type: string;

    @ApiProperty({
      description: 'duration for the subscription',
    })
    @IsNotEmpty()
    @IsString()
    duration: string;
  }
  