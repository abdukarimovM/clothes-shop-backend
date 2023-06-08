import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRegionDto {
  @ApiProperty({ example: 'Samarkand' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  readonly countryId: number;
}