import {
  Column,
  DataType,
  Table,
  Model,
  HasMany,
  ForeignKey,
  BelongsTo
} from "sequelize-typescript";
import { OrderItem } from "../../order_items/entities/order_item.entity";
import { Card } from "../../card/entities/card.entity";
import { CustomerAddress } from "../../customer_address/entities/customer_address.entity";

interface CustomerAttr {
  first_name: string;
  last_name: string;
  hashed_password: string;
  email: string;
  phone_number: string;
  hashed_refresh_token: string;
}

@Table({ tableName: 'customer' })
export class Customer extends Model<Customer, CustomerAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone_number: string

  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  hashed_password: string;

  @Column({ type: DataType.STRING })
  hashed_refresh_token: string;

  @Column({ type: DataType.STRING })
  activation_link: string;


  @HasMany(() => OrderItem)
  orderItem: OrderItem[];

  @HasMany(() => Card)
  card: Card[];
}