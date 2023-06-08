import { Injectable } from '@nestjs/common';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Discount } from './entities/discount.entity';

@Injectable()
export class DiscountsService {
  constructor(@InjectModel(Discount) private discountRepo: typeof Discount){}

  async create(createDiscountDto: CreateDiscountDto) {
    const res = await this.discountRepo.create(createDiscountDto);
    return res;
  }

  async getAll() {
    return await this.discountRepo.findAll({ include: { all: true } });
  }

  async getOne(id: number) {
    return await this.discountRepo.findByPk(id);
  }

  async update(id: number, updateDiscountDto: UpdateDiscountDto) {
    return await this.discountRepo.update(updateDiscountDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.discountRepo.destroy({ where: { id } });
    return result;
  }
}
