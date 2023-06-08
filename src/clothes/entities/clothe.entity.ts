import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
} from 'sequelize-typescript';
import { Category } from '../../catigories/entities/catigory.entity';
import { Admin } from '../../admin/entities/admin.entity';
import { Manufacture } from '../../clothes_manufacture/entities/clothes_manufacture.entity';
import { Status } from '../../status/entities/status.entity';
import { OrderItem } from '../../order_items/entities/order_item.entity';
import { Discount } from '../../discounts/entities/discount.entity';

interface ClothesAttr {
    name: string;
    price: number;
    description: string;
    image_url: string;
    catigories_id: number;
    admin_id: number;
    manufacture_id: number;
    status_id: number;
}

@Table({ tableName: 'clothes' })

export class Clothe extends Model<Clothe, ClothesAttr> {
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
    price: number;

    @Column({
        type: DataType.STRING,
    })
    description: string;

    @Column({
        type: DataType.STRING,
    })
    image_url: string;

    @ForeignKey(() => OrderItem)
    @Column({ type: DataType.INTEGER })
    order_id: number;
    @BelongsTo(() => OrderItem)
    order_items: OrderItem[];

    @ForeignKey(() => Category)
    @Column({ type: DataType.INTEGER })
    category_id: number;
    @BelongsTo(() => Category)
    category: Category[];

    @ForeignKey(() => Admin)
    @Column({ type: DataType.INTEGER })
    admin_id: number;
    @BelongsTo(() => Admin)
    admin: Admin[];

    @ForeignKey(() => Manufacture)
    @Column({ type: DataType.INTEGER })
    manufacture_id: number;
    @BelongsTo(() => Manufacture)
    manufacture: Manufacture[];

    @ForeignKey(() => Status)
    @Column({ type: DataType.INTEGER })
    status_id: number;
    status: Status[];

    @HasMany(() => Discount)
	discount: Discount[];
}
