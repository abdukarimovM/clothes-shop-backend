import { Module } from '@nestjs/common';
import { PaymentTypeService } from './payment_type.service';
import { PaymentTypeController } from './payment_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtModule } from '@nestjs/jwt';
import { PaymentType } from './entities/payment_type.entity';

@Module({
  imports: [SequelizeModule.forFeature([PaymentType]), JwtModule],
  controllers: [PaymentTypeController],
  providers: [PaymentTypeService]
})
export class PaymentTypeModule {}
