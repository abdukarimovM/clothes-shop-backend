import { Injectable } from '@nestjs/common';
import { CreatePaymentTypeDto } from './dto/create-payment_type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentType } from './entities/payment_type.entity';

@Injectable()

export class PaymentTypeService {
  constructor (@InjectModel(PaymentType) private paymentRepo: typeof PaymentType) {}

  async create(createPaymentTypeDto: CreatePaymentTypeDto) {
    const newPayment = await this.paymentRepo.create(createPaymentTypeDto)
    return newPayment;
  }

  async getAll() {
    const payment = await this.paymentRepo.findAll({ include: { all: true } });
    return payment.sort((a, b) => a.id - b.id);
  }

  async findOne(id: number) {
    const payment = await this.paymentRepo.findByPk(id);
    return payment;
  }

  async update(id: number, updatePaymentDto: UpdatePaymentTypeDto) {
    return await this.paymentRepo.update(updatePaymentDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.paymentRepo.destroy({ where: { id } });
    return result;
  }
}
