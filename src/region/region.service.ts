import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { Region } from './entities/region.entity';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region) private regionRepo: typeof Region) {}

  async create(createRegionDto: CreateRegionDto) {
    const newRegion = await this.regionRepo.create(createRegionDto);
    return newRegion;
  }

  async getAll() {
    const region = await this.regionRepo.findAll({ include: { all: true } });
    return region.sort((a, b) => a.id - b.id);
  }

  async getOne(id: number) {
    const region = await this.regionRepo.findByPk(id);
    return region;
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {
    return await this.regionRepo.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.regionRepo.destroy({ where: { id } });
    return result;
  }
}