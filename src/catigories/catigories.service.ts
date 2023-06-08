import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './entities/catigory.entity';
import { CreateCategoryDto } from './dto/create-catigory.dto';
import { UpdateCategoryDto } from './dto/update-catigory.dto';


@Injectable()
export class CategoryService {
  constructor(@InjectModel(Category) private categoryRepo: typeof Category) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const newCategory = await this.categoryRepo.create(createCategoryDto);
    return newCategory;
  }

  async getAll() {
    const result = await this.categoryRepo.findAll({ include: { all: true } });
    return result;
  }

  async getById(id: number) {
    const result = await this.categoryRepo.findByPk(id);
    return result;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const result = await this.categoryRepo.update(updateCategoryDto, {
      where: { id },
    });
    return result;
  }

  async delete(id: number): Promise<number> {
    const result = await this.categoryRepo.destroy({ where: { id } });
    return result;
  }
}
