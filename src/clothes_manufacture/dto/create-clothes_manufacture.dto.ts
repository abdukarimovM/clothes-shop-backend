import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateManufactureDto {
    @ApiProperty({ example: 'Nike' })
    @IsNotEmpty()
    name: string;

    @ApiProperty({ example: 'Mahsulot chiqargan companiya haqida malumot' })
    manufacture_desc:string;
}
