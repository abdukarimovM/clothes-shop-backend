import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateAdminDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'doe@gmail.com' })
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'Johndoe123!' })  
  @IsStrongPassword()
  password: string;
}