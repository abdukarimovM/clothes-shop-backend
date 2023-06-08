import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './entities/country.entity';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';


@Injectable()
export class CountryService {
  constructor(@InjectModel(Country) private countryRepo: typeof Country) {}

  async create(createCountryDto: CreateCountryDto) {
    const newCountry = await this.countryRepo.create(createCountryDto);
    return newCountry;
  }

  async getAll() {
    const country = await this.countryRepo.findAll({ include: { all: true } });
    return country.sort((a, b) => a.id - b.id);
  }

  async findOne(id: number) {
    const country = await this.countryRepo.findByPk(id);
    return country;
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
    return await this.countryRepo.update(updateCountryDto, {
      where: { id },
      returning: true,
    });
  }

  async delete(id: number): Promise<number> {
    const result = await this.countryRepo.destroy({ where: { id } });
    return result;
  }
}