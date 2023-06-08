import { ApiProperty } from "@nestjs/swagger";

export class UpdateOrderItemDto {
    @ApiProperty({ example: '1' })
    readonly customer_id?: number;

    @ApiProperty({ example: '1' })
    readonly quantity?: number;

    @ApiProperty({ example: '1' })
    readonly payment_type_id?: number;

    @ApiProperty({ example: '1' })
    readonly delivery_type_id?: number;

    @ApiProperty({ example: '1' })
    readonly card_id?: number;
}