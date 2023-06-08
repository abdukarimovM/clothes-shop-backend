import { ApiProperty } from "@nestjs/swagger";

export class UpdateDiscountDto {
    
    @ApiProperty({ example: 1 })
    readonly clothes_id?: number;

    @ApiProperty({ example: 1000 })
    readonly price?: number;

    @ApiProperty({ example: '2023-03-14' })
    readonly start_date?: string;

    @ApiProperty({ example: '2023-04-14' })
    readonly finish_date?: string;

    @ApiProperty({ example: 1 })
    readonly admin_id?: number;

}
