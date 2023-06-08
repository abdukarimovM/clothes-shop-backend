import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreatePaymentTypeDto {
      
    @ApiProperty({ example: 'Naqt' })
    @IsNotEmpty()
    name: string;
}
