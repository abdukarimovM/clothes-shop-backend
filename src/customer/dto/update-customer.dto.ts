import { ApiProperty } from "@nestjs/swagger";

export class UpdateCustomerDto {

    @ApiProperty({ example: 'Toshmat' })
    readonly first_name?: string;

    @ApiProperty({ example: 'Hoshimov' })
    readonly last_name?: string;  

    @ApiProperty({ example: '+998887028030' })
    readonly phone_number?: string;
    
    @ApiProperty({ example: 'tosh@gmail.com' })
    readonly email?: string;

    @ApiProperty({ example: 'Uzb@k!$t0n' })
    readonly hashed_password?: string;
    
    @ApiProperty({ example: 'Token' })
    readonly hashed_refresh_token?: string;

    @ApiProperty({ example: 'Link Activation' })
    readonly activation_link?: string;
}
