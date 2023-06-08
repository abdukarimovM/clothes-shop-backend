import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Manufacture } from './entities/clothes_manufacture.entity';
import { CreateManufactureDto } from './dto/create-clothes_manufacture.dto';
import { UpdateManufactureDto } from './dto/update-clothes_manufacture.dto';

@Injectable()
export class ManufactureService {
  constructor(@InjectModel(Manufacture) private manufactureRepo: typeof Manufacture) {}

  async create(createManufactureDto: CreateManufactureDto) {
    const res = await this.manufactureRepo.create(createManufactureDto);
    return res;
  }

  async findAll() {
    return await this.manufactureRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return await this.manufactureRepo.findByPk(id);
  }

  async update(id: number, updateFlatDto: UpdateManufactureDto) {
    return await this.manufactureRepo.update(updateFlatDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.manufactureRepo.destroy({ where: { id } });
    return result;
  }
}