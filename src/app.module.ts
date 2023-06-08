import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { CustomerAddressModule } from './customer_address/customer_address.module';
import { DiscountsModule } from './discounts/discounts.module';
import { OrderItemsModule } from './order_items/order_items.module';
import { CustomerModule } from './customer/customer.module';
import { ClothesManufactureModule } from './clothes_manufacture/clothes_manufacture.module';
import { StatusModule } from './status/status.module';
import { ClothesModule } from './clothes/clothes.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Admin } from './admin/entities/admin.entity';
import { CountryModule } from './country/country.module';
import { RegionModule } from './region/region.module';
import { DistrictModule } from './district/district.module';
import { CardModule } from './card/card.module';
import { PaymentTypeModule } from './payment_type/payment_type.module';
import { DeliveryTypeModule } from './delivery_type/delivery_type.module';
import { Country } from './country/entities/country.entity';
import { Region } from './region/entities/region.entity';
import { FlatModule } from './flat/flat.module';
import { District } from './district/entities/district.entity';
import { CustomerAddress } from './customer_address/entities/customer_address.entity';
import { Manufacture } from './clothes_manufacture/entities/clothes_manufacture.entity';
import { Flat } from './flat/entities/flat.entity';
import { Category } from './catigories/entities/catigory.entity';
import { CategoriesModule } from './catigories/catigories.module';
import { MailModule } from './mail/mail.module';
import { Customer } from './customer/entities/customer.entity';
import { Status } from './status/entities/status.entity';
import { PaymentType } from './payment_type/entities/payment_type.entity';
import { DeliveryType } from './delivery_type/entities/delivery_type.entity';
import { Card } from './card/entities/card.entity';
import { OrderItem } from './order_items/entities/order_item.entity';
import { Clothe } from './clothes/entities/clothe.entity';
import { Discount } from './discounts/entities/discount.entity';
import { AuthModule } from './auth/auth.module';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Admin,
        Country,
        Region,
        District,
        CustomerAddress,
        Manufacture,
        Flat,
        Category,
        Customer,
        Status,
        PaymentType,
        DeliveryType,
        Card,
        OrderItem,
        Clothe,
        Discount
      ], 
      autoLoadModels: true,
      logging: false,
    }),
    AdminModule,
    CustomerAddressModule,
    DiscountsModule,
    OrderItemsModule,
    CustomerModule,
    ClothesManufactureModule,
    StatusModule,
    ClothesModule,
    CountryModule,
    RegionModule,
    DistrictModule,
    CardModule,
    PaymentTypeModule,
    DeliveryTypeModule,
    FlatModule,
    CategoriesModule,
    OtpModule,
    AuthModule,
    MailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
