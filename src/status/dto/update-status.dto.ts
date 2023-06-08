import { ApiProperty } from "@nestjs/swagger";

export class UpdateStatusDto {
    @ApiProperty({ example: 'Hozirda yoq' })
    readonly name?: string;
}
