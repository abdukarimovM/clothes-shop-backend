import { ApiProperty } from "@nestjs/swagger";

export class UpdatePaymentTypeDto {
    @ApiProperty({ example: 'Cartada' })
    readonly name?: string;
}
