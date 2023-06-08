import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from './entities/status.entity';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';


@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {}

  async create(createStatusDto: CreateStatusDto) {
    const newStatus = await this.statusRepo.create(createStatusDto);
    return newStatus;
  }

  async getAll() {
    const status = await this.statusRepo.findAll({ include: { all: true } });
    return status.sort((a, b) => a.id - b.id);
  }

  async findOne(id: number) {
    const status = await this.statusRepo.findByPk(id);
    return status;
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    return await this.statusRepo.update(updateStatusDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.statusRepo.destroy({ where: { id } });
    return result;
  }
}