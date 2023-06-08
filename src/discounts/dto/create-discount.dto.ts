import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscountDto {

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    clothes_id: number

    @ApiProperty({ example: 3000 })
    @IsNotEmpty()
    readonly price: number;

    @ApiProperty({ example: '2023-03-14' })
    @IsNotEmpty()
    readonly start_date: string;

    @ApiProperty({ example: '2023-04-14' })
    @IsNotEmpty()
    readonly finish_date: string;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    admin_id: number    
    
}
