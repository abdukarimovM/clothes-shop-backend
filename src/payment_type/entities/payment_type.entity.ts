import { 
    Column, 
    DataType, 
    HasMany, 
    Model, 
    Table 
} from "sequelize-typescript";
import { OrderItem } from "../../order_items/entities/order_item.entity";


interface PaymentAttr {
    name: string
}
@Table({ tableName: 'payment' })
export class PaymentType extends Model < PaymentType, PaymentAttr>{

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    })
    id: number;

    @Column({ type: DataType.STRING })
	name:string;
    
    @HasMany(() => OrderItem)
	orderItem: OrderItem[];
}