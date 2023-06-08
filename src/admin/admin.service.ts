import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './entities/admin.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {

  constructor(@InjectModel(Admin) private adminRepo: typeof Admin) {}
  
  //create
  async createAdmin(createAdminDto: CreateAdminDto) {
    const condidate = await this.adminRepo.findOne({where: {email: createAdminDto.email}});
    if (condidate){
      throw new BadRequestException("Email already exist!");
    } ;
    const hashed_password =  await bcrypt.hash(createAdminDto.password, 7);
    const admin = await this.adminRepo.create({...createAdminDto, hashed_password});
    return admin;
  }

  //getall
  async getAllAdmins() {
    const result = await this.adminRepo.findAll({ include: { all: true } });
    return result;
  }

  //getone
  async getAdminById(id: number) {
    const result = await this.adminRepo.findByPk(id);
    return result;
  }

  //update
  async updateAdmin(id: number, updateAdminDto: UpdateAdminDto) {
    const result = await this.adminRepo.update(updateAdminDto, {
      where: { id },
    });
    return result;
  }

  //delete
  async deleteAdmin(id: number): Promise<number> {
    const result = await this.adminRepo.destroy({ where: { id } });
  return result;
  }
}
