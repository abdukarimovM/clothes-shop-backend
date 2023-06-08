import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';

interface FlatAttr {
	floor:number
	number:number
}

@Table({ tableName: 'flat' })
export class Flat extends Model<Flat, FlatAttr> {
    
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    id: number;

	@Column({ type: DataType.INTEGER })
	number:number;

	@Column({ type: DataType.INTEGER })
	floor:number;
	
}