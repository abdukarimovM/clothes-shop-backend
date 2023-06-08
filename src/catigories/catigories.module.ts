import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './entities/catigory.entity';
import { CategoryController } from './catigories.controller';
import { CategoryService } from './catigories.service';

@Module({
  imports: [SequelizeModule.forFeature([Category]), JwtModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoriesModule {}