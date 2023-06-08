import { ApiProperty } from "@nestjs/swagger";


export class UpdateDeliveryTypeDto {
    @ApiProperty({ example: 'Pochtadan olib ketish' })
    readonly name?: string;
}
