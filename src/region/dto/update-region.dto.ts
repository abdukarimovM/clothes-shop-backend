import { ApiProperty } from '@nestjs/swagger';

export class UpdateRegionDto {
  @ApiProperty({ example: 'Toshkent' })
  readonly name?: string;
}