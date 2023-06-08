import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateDeliveryTypeDto {
    @ApiProperty({ example: 'Yetkazib berish' })
    @IsNotEmpty()
    name: string;
}
