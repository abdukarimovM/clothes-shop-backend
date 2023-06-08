import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class CreateCardDto {

    @ApiProperty({ example: 'Uzcard' })
    @IsNotEmpty()
    readonly name: string;
  
    @ApiProperty({ example: '5614 5433 5231 6874' })
    @IsNotEmpty()
    readonly card_number: string;

    @ApiProperty({ example: '+998807018023' })
    @IsNotEmpty()
    readonly phone_number: string;
  
    @ApiProperty({ example: 17 })
    @IsNotEmpty()
    readonly year: number;
  
    @ApiProperty({ example: 7 })
    @IsNotEmpty()
    readonly month: number;

    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    readonly customerId: number;
  
}
