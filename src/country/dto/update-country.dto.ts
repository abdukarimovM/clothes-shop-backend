import { ApiProperty } from '@nestjs/swagger';

export class UpdateCountryDto {
  @ApiProperty({ example: 'Australia' })
  readonly name?: string;
}