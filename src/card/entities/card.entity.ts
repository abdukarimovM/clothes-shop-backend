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
import { OrderItem } from '../../order_items/entities/order_item.entity';

interface CardAttr {
    name: string;
    card_number: string;
    phone_number: string;
    year: number;
    month: number;
    customerId: number;
}

@Table({ tableName: 'card' })
export class Card extends Model <Card, CardAttr>{
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @Column({
        type: DataType.STRING,
    })
    card_number: string;

    @Column({
        type: DataType.STRING,
    })
    phone_number: string;

    @Column({
        type: DataType.INTEGER,
    })
    year: number;

    @Column({
        type: DataType.INTEGER,
    })
    month: number;

    @ForeignKey(() => Customer)
    @Column({ type: DataType.INTEGER })
    customerId: number;
    @BelongsTo(() => Customer)
    customer: Customer[];


    @HasMany(() => OrderItem)
    orderItem: OrderItem[];
}
