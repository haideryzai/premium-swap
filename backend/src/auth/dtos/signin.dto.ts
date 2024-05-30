import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignInDTO {
  @ApiProperty({
    description: 'Username or email of the user',
    example: 'johndoe or johndoe@example.com',
  })
  @IsNotEmpty()
  @IsString()
  email_address: string;

  @ApiProperty({
    description: 'Password for the account',
    example: 'securepassword',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
