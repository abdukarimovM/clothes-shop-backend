import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateDistrictDto {
  @ApiProperty({ example: 'Mirzo-Ulugbek' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly regionId: number;
}