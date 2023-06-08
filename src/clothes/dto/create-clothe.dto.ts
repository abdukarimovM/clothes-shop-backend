import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateClotheDto {
    @ApiProperty({ example: 'Adidas T365' })
    @IsNotEmpty()
    name: string

    @ApiProperty({ example: 5000 })
    @IsNotEmpty()
    price: number

    @ApiProperty({ example: 'Adidas sweatshirt that keeps you warm, despite the low temperatures outside' })
    @IsNotEmpty()
    description: string

    @ApiProperty({ example: 'img.jpg' })
    @IsNotEmpty()
    image_url:string

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    admin_id:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    order_id:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    catigories_id:number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    manufacture_id: number

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    status_id: number

}
