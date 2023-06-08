import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Clothe } from '../../clothes/entities/clothe.entity';
import { Discount } from '../../discounts/entities/discount.entity';
import { Category } from '../../catigories/entities/catigory.entity';

interface AdminAttr {
  name: string;
  email: string;
  hashed_password: string;
}

@Table({ tableName: 'admin' })
export class Admin extends Model<Admin, AdminAttr> {
  
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  hashed_password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_creater: boolean;

  @Column({
    type: DataType.STRING,
  })
  hashed_refresh_token: string;

  @HasMany(() => Clothe)
  clothe: Clothe[];

  @HasMany(() => Discount)
  discount: Discount[];

  @HasMany(() => Category)
  category: Category[];
  
}