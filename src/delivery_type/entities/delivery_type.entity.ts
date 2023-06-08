import {
    Column,
    DataType,
    HasMany,
    Model,
    Table
} from "sequelize-typescript";
import { OrderItem } from "../../order_items/entities/order_item.entity";

interface DeliveryAttr {
    name: string
}

@Table({ tableName: 'delivery' })
export class DeliveryType extends Model<DeliveryType, DeliveryAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({ type: DataType.STRING })
    name: string;

    @HasMany(() => OrderItem)
    orderItem: OrderItem[];

}
