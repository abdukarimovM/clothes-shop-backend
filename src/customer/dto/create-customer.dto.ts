import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsPhoneNumber, IsString, IsStrongPassword } from "class-validator";

export class CreateCustomerDto {

    @ApiProperty({ example: 'Toshmat' })
    @IsNotEmpty()
    @IsString()
    readonly first_name: string;

    @ApiProperty({ example: 'Eshmatov' })
    @IsNotEmpty()
    @IsString()
    readonly last_name: string;

    @ApiProperty({ example: '+998907007070' })
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone_number: string;
    
    @ApiProperty({ example: 'tosh@gmail.com' })
    @IsNotEmpty()
    @IsString()
    readonly email: string;
    
    @ApiProperty({ example: 'Uzb@k!$t0n' })
    @IsNotEmpty()
    @IsStrongPassword()
    readonly password: string;

}
