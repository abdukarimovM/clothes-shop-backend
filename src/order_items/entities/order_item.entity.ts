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
import { PaymentType } from '../../payment_type/entities/payment_type.entity';
import { DeliveryType } from '../../delivery_type/entities/delivery_type.entity';
import { Card } from '../../card/entities/card.entity';
import { Clothe } from '../../clothes/entities/clothe.entity';

interface OrderAttr {
  customer_id: number;
  quantity: number;
  payment_type_id: number;
  delivery_type_id: number;
  card_id: number;
}

@Table({ tableName: 'orders-items' })
export class OrderItem extends Model<OrderItem, OrderAttr> {

  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Customer)
  @Column({ type: DataType.INTEGER })
  customer_id: number;
  @BelongsTo(() => Customer)
  customer: Customer[];

  @Column({ type: DataType.INTEGER })
  quantity: number;

  @ForeignKey(() => PaymentType)
  @Column({ type: DataType.INTEGER })
  payment_type_id: number;
  @BelongsTo(() => PaymentType)
  paymentType: PaymentType[];
  
  @ForeignKey(() => DeliveryType)
  @Column({ type: DataType.INTEGER })
  delivery_type_id: number;
  @BelongsTo(() => DeliveryType)
  deliveryType: DeliveryType[];

  @ForeignKey(() => Card)
  @Column({ type: DataType.INTEGER })
  card_id: number;
  @BelongsTo(() => Card)
  card: Card[];

  @HasMany(() => Clothe)
  clothe: Clothe[];
}
