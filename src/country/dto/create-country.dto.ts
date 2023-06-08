import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";


export class CreateCountryDto {
    @ApiProperty({ example: 'Uzbekistan'})
    @IsNotEmpty()
    readonly name: string;
}
