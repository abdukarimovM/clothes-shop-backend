import { Injectable } from '@nestjs/common';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Clothe } from './entities/clothe.entity';

@Injectable()
export class ClothesService {
  constructor(@InjectModel(Clothe) private clotheRepo: typeof Clothe){}

  async create(createClotheDto: CreateClotheDto) {
    const newClothe = await this.clotheRepo.create(createClotheDto);
    return newClothe;
  }

  async getAll() {
    const result = await this.clotheRepo.findAll({ include: { all: true } });
    return result;
  }

  async getOne(id: number) {
    const result = await this.clotheRepo.findByPk(id);
    return result;
  }

  async update(id: number, updateClotheDto: UpdateClotheDto) {
    const result = await this.clotheRepo.update(updateClotheDto, {
      where: { id },
    });
    return result;
  }

  async delete(id: number) {
    const result = await this.clotheRepo.destroy({ where: { id } });
    return result;
  }
}
