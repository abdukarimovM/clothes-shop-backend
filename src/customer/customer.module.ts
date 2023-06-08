import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';
import { Otp } from '../otp/entities/otp.entity';
import { JwtModule } from '@nestjs/jwt';
import { OtpModule } from '../otp/otp.module';

@Module({
  imports: [SequelizeModule.forFeature([Customer, Otp]),
  JwtModule,
  OtpModule,
],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
