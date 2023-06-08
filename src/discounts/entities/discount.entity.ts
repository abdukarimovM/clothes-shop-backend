import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Clothe } from "../../clothes/entities/clothe.entity";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Admin } from "../../admin/entities/admin.entity";


interface DiscountAttr {
    clothes_id: number
    price: number;
    start_date: string;
    finish_date: string;
    admin_id: number
}

@Table({ tableName: 'discount' })
export class Discount extends Model<Discount, DiscountAttr>{
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

    @ForeignKey(() => Clothe)
    @Column({ type: DataType.INTEGER })
    clothes_id: number;
    @BelongsTo(() => Clothe)
    clothe: Clothe[];

    @Column({
        type: DataType.INTEGER,
    })
    price: number;

    @Column({
        type: DataType.STRING,
    })
    start_date: string;

    @Column({
        type: DataType.STRING,
    })
    finish_date: string;

    @ForeignKey(() => Admin)
    @Column({ type: DataType.INTEGER })
    admin_id: number;
    @BelongsTo(() => Admin)
    admin: Admin[];
}
