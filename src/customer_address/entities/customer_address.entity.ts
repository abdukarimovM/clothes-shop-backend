import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { Customer } from '../../customer/entities/customer.entity';
import { Country } from '../../country/entities/country.entity';
import { Region } from '../../region/entities/region.entity';
import { District } from '../../district/entities/district.entity';
import { Flat } from '../../flat/entities/flat.entity';

interface CustomerAddressAttr {
    name: string
    country_id: number
    region_id: number
    district_id: number
    street: string
    house: string
    flat_id: number
    info: string
}

@Table({ tableName: 'customer-address' })
export class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttr> {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @ForeignKey(() => Country)
    @Column({ type: DataType.INTEGER })
    country_id: number;
    @BelongsTo(() => Country)
    country: Country[];

    @ForeignKey(() => Region)
    @Column({ type: DataType.INTEGER })
    region_id: number;
    @BelongsTo(() => Region)
    region: Region[];

    @ForeignKey(() => District)
    @Column({ type: DataType.INTEGER })
    district_id: number;
    @BelongsTo(() => District)
    district: District[];

    @Column({ type: DataType.STRING })
    street: string;

    @Column({ type: DataType.STRING })
    house: string;

    @ForeignKey(() => Flat)
    @Column({ type: DataType.INTEGER })
    flat_id: number;
    @BelongsTo(() => Flat)
    flat: Flat[];

    @Column({ type: DataType.STRING })
    info: string;

}