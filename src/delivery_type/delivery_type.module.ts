import { Module } from '@nestjs/common';
import { DeliveryTypeService } from './delivery_type.service';
import { DeliveryTypeController } from './delivery_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { DeliveryType } from './entities/delivery_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([DeliveryType]), JwtModule],
  controllers: [DeliveryTypeController],
  providers: [DeliveryTypeService]
})
export class DeliveryTypeModule {}
