import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateStatusDto {
    
    @ApiProperty({ example: '10 ta bor' })
    @IsNotEmpty()
    name: string;

}
