import {
    BelongsTo,
    Column,
    DataType,
    ForeignKey,
    HasMany,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Admin } from '../../admin/entities/admin.entity';
import { Clothe } from '../../clothes/entities/clothe.entity';
  
  interface CategoriesAttr {
    name: string;
    parentId: number;
    adminId: number
  }
  
  @Table({ tableName: 'categories' })
  export class Category extends Model<Category, CategoriesAttr> {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name: string;
  
    @ForeignKey(() => Category)
    @Column({
      type: DataType.INTEGER,
    })
    parentId: number;
    @BelongsTo(() => Category)
    parentCategory: Category;


    @ForeignKey(() => Admin)
    @Column({ type: DataType.INTEGER })
    adminId: number;
    @BelongsTo(() => Admin)
    admin: Admin[];
  
    @HasMany(() => Clothe)
    clothe: Clothe[];
  }