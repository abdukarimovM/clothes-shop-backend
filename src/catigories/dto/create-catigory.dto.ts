
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Shoes' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly parentId: number;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly adminId: number;

}