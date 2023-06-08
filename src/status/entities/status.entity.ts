import { 
    Column, 
    DataType, 
    HasMany, 
    Model, 
    Table 
} from "sequelize-typescript";
import { Clothe } from "../../clothes/entities/clothe.entity";

interface StatusAttr {
    name: string
}

@Table({ tableName: 'status' })
export class Status extends Model<Status, StatusAttr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    })
    id: number;

    @Column({ type: DataType.STRING })
	name:string;
    
    @HasMany(() => Clothe)
    clothe: Clothe[];
}
