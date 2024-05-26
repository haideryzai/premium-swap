import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class ResetPassDTO {
  @ApiProperty({
    description: 'Email address of the user',
    example: 'johndoe or johndoe@example.com',
  })
  @IsNotEmpty()
  @IsString()
  email_address: string;
}
