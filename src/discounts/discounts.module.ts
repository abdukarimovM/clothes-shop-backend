import { Module } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { DiscountsController } from './discounts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount } from './entities/discount.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Discount]), JwtModule],
  controllers: [DiscountsController],
  providers: [DiscountsService]
})
export class DiscountsModule {}
