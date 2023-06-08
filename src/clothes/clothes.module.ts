import { Module } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { ClothesController } from './clothes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clothe } from './entities/clothe.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Clothe]), JwtModule],
  controllers: [ClothesController],
  providers: [ClothesService]
})
export class ClothesModule {}
