import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { CreateCountryDto } from "../dto/create-country.dto";
import { UpdateCountryDto } from "../dto/update-country.dto";
import { CustomerAddress } from "../../customer_address/entities/customer_address.entity";
import { Region } from "../../region/entities/region.entity";

interface CountryAttr {
    name: string
}

@Table({ tableName: 'country' })
export class Country extends Model<Country, CountryAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    })
    id: number;

    @Column({ type: DataType.STRING })
	name:string;
    

    @HasMany(() => CustomerAddress)
    customerAddress: CustomerAddress[];

    @HasMany(() => Region)
    region: Region[]
}
