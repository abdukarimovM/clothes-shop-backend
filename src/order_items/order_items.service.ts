import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { OrderItem } from './entities/order_item.entity';

@Injectable()
export class OrderItemsService {
  constructor(@InjectModel(OrderItem) private orderRepo: typeof OrderItem){}

  async create(createOrederDto: CreateOrderItemDto) {
    const res = await this.orderRepo.create(createOrederDto);
    return res;
  }

  async getAll() {
    return await this.orderRepo.findAll({ include: { all: true } });
  }

  async getOne(id: number) {
    return await this.orderRepo.findByPk(id);
  }

  async update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return await this.orderRepo.update(updateOrderItemDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.orderRepo.destroy({ where: { id } });
    return result;
  }
}
