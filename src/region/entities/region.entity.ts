import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { Country } from "../../country/entities/country.entity";
import { CustomerAddress } from "../../customer_address/entities/customer_address.entity";
import { District } from "../../district/entities/district.entity";

interface RegionAttr {
  name: string;
  countryId: number;
}

@Table({ tableName: 'region' })
export class Region extends Model<Region, RegionAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @ForeignKey(() => Country)
  @Column({ type: DataType.INTEGER })
  countryId: number;
  @BelongsTo(() => Country)
  country: Country[];

  @HasMany(() => CustomerAddress)
  customerAddress: CustomerAddress[];

  @HasMany(() => District)
  district: District[];

}