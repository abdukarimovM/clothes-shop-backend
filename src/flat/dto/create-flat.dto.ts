import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateFlatDto {
    @ApiProperty({ example: '3' })
    @IsNotEmpty()
    floor: number;

    @ApiProperty({ example: '13' })
    @IsNotEmpty()
    number:number;
}
