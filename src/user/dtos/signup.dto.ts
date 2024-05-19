import {
  IsNotEmpty,
  IsEmail,
  IsString,
  IsOptional,
  Length,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class SignUpDTO {
  @ApiProperty({
    description: 'The username of the user',
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({
    description: 'Password for the account',
    uniqueItems: true,
  })
  @IsString()
  @Length(4, 10)
  password: string;

  @ApiProperty({
    description: 'Email address of the user',
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsEmail()
  email_address: string;

  @ApiProperty({
    description: 'Phone number of the user',
    uniqueItems: true,
  })
  @IsString()
  phone_number: string;

  @ApiProperty({
    description: 'User type of the user',
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsString()
  user_type: string;

  @ApiProperty({
    description: 'First name of the user',
    uniqueItems: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    description: 'Last name of the user',
    uniqueItems: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    description: 'Address of the user',
    uniqueItems: true,
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'City of the user',
    uniqueItems: true,
  })
  @IsString()
  city: string;

  @ApiProperty({
    description: 'State of the user',
    uniqueItems: true,
  })
  @IsString()
  state: string;

  @ApiProperty({
    description: 'Zip code of the user',
    uniqueItems: true,
  })
  @IsString()
  zip: string;

  @ApiProperty({
    description: 'Country of the user',
    uniqueItems: true,
  })
  @IsString()
  country: string;

  @ApiProperty({
    description: 'User ID of the user',
    uniqueItems: true,
  })
  @IsString()
  @IsOptional()
  image: string;
}
