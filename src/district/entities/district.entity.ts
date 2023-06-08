import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Region } from '../../region/entities/region.entity';
import { CustomerAddress } from '../../customer_address/entities/customer_address.entity';

interface DistrictAttr {
  name: string;
  regionId: number;
}

@Table({ tableName: 'district' })
export class District extends Model<District, DistrictAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ForeignKey(() => Region)
  @Column({ type: DataType.INTEGER })
  regionId: number;
  @BelongsTo(() => Region)
  region: Region[];

  @HasMany(() => CustomerAddress)
  customerAddress: CustomerAddress[];
}