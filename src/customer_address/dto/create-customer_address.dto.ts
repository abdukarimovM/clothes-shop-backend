import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCustomerAddressDto {
    @ApiProperty({ example: 'Qatortol'})
    @IsNotEmpty()
    readonly name: string;
    
    @ApiProperty({ example: '1' })
    readonly customer_id: number;

    @ApiProperty({ example: '1' })
    @IsNotEmpty()
    readonly country_id: number;

    @ApiProperty({ example: '1' })
    @IsNotEmpty()
    readonly region_id: number;

    @ApiProperty({ example: '1' })
    @IsNotEmpty()
    readonly district_id: number;

    @ApiProperty({ example: 'Uzbekistan street' })
    @IsNotEmpty()
    readonly street: string;

    @ApiProperty({ example: '1' })
    @IsNotEmpty()
    readonly flat_id: number;

    @ApiProperty({ example: '15' })
    @IsNotEmpty()
    readonly house: string;

    @ApiProperty({ example: 'Qoshimcha malumot' })
    info: string;
}