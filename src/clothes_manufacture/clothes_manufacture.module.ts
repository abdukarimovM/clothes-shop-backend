import { Module } from '@nestjs/common';
import { ManufactureController } from './clothes_manufacture.controller';
import { ManufactureService } from './clothes_manufacture.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Manufacture } from './entities/clothes_manufacture.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Manufacture]), JwtModule],
  controllers: [ManufactureController],
  providers: [ManufactureService]
})
export class ClothesManufactureModule {}
