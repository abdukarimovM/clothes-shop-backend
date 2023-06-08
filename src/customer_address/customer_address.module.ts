import { Module } from '@nestjs/common';
import { CustomerAddressService } from './customer_address.service';
import { CustomerAddressController } from './customer_address.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerAddress } from './entities/customer_address.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([CustomerAddress]), JwtModule],
  controllers: [CustomerAddressController],
  providers: [CustomerAddressService]
})
export class CustomerAddressModule {}
