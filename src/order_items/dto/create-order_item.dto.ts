import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateOrderItemDto {
    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    readonly customer_id: number;
    
    @ApiProperty({ example: 3000 })
    @IsNotEmpty()
    readonly quantity: number;

    @ApiProperty({ example: 2 })
    @IsNotEmpty()
    readonly payment_type_id: number;
    
    @ApiProperty({ example: 3 })
    @IsNotEmpty()
    readonly delivery_type_id: number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    readonly card_id: number
}
