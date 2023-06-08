import { ApiProperty } from '@nestjs/swagger';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Dress' })
  readonly name?: string;

  @ApiProperty({ example: '1' })
  readonly parentId?: number;

  @ApiProperty({ example: '1' })
  readonly adminId?: number;

}