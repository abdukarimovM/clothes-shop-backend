import { Injectable } from '@nestjs/common';
import { CreateDeliveryTypeDto } from './dto/create-delivery_type.dto';
import { UpdateDeliveryTypeDto } from './dto/update-delivery_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { DeliveryType } from './entities/delivery_type.entity';

@Injectable()
export class DeliveryTypeService {
  constructor (@InjectModel(DeliveryType) private deliveryRepo: typeof DeliveryType){
  }

  async create(createDeliveryTypeDto: CreateDeliveryTypeDto) {
    const newDelivery = await this.deliveryRepo.create(createDeliveryTypeDto)
    return newDelivery;
  }

  async getAll() {
    const delivery = await this.deliveryRepo.findAll({ include: { all: true } });
    return delivery.sort((a, b) => a.id - b.id);
  }

  async getOne(id: number) {
    const delivery = await this.deliveryRepo.findByPk(id);
    return delivery;
  }

  async update(id: number, updateDeliveryDto: UpdateDeliveryTypeDto) {
    return await this.deliveryRepo.update(updateDeliveryDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.deliveryRepo.destroy({ where: { id } });
    return result;
  }
}
