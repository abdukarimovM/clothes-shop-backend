import {
    Column,
    DataType,
    HasMany,
    Model,
    Table
} from "sequelize-typescript"
import { Clothe } from "../../clothes/entities/clothe.entity";


interface ManufactureAttr {
    name: string
    manufacture_desc: string
}

@Table({ tableName: "manufacture" })

export class Manufacture extends Model<Manufacture, ManufactureAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({ type: DataType.STRING })
    manufacture_desc: string;

    @HasMany(() => Clothe)
    clothe: Clothe[];
}
