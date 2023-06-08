import { ApiProperty } from "@nestjs/swagger";

export class UpdateClotheDto {
    @ApiProperty({ example: 'Adidas t31' })
    readonly name: string;

    @ApiProperty({ example: 5000 })
    price: number

    @ApiProperty({ example: 'Adidas sweatshirt that keeps you warm, despite the low temperatures outside' })
    description: string

    @ApiProperty({ example: 'img.jpg' })
    image_url:string

    @ApiProperty({ example: 1 })
    admin_id:number

    @ApiProperty({ example: 1 })
    order_id:number

    @ApiProperty({ example: 1 })
    catigories_id:number

    @ApiProperty({ example: 1 })
    manufacture_id: number

    @ApiProperty({ example: 1 })
    status_id: number
}
