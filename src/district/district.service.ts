import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './entities/district.entity';

@Injectable()
export class DistrictService {
  constructor(@InjectModel(District) private districtRepo: typeof District) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const newDistrict = await this.districtRepo.create(createDistrictDto);
    return newDistrict;
  }

  async getAll() {
    const result = await this.districtRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getOne(id: number) {
    const result = await this.districtRepo.findByPk(id);
    return result;
  }

  async update(id: number, updateDistrictDto: UpdateDistrictDto) {
    const result = await this.districtRepo.update(updateDistrictDto, {
      where: { id },
    });
    return result;
  }

  async delete(id: number): Promise<number> {
    const result = await this.districtRepo.destroy({ where: { id } });
    return result;
  }
}
