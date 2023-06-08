import { Module } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { OrderItemsController } from './order_items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderItem } from './entities/order_item.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([OrderItem]), JwtModule],
  controllers: [OrderItemsController],
  providers: [OrderItemsService]
})
export class OrderItemsModule {}
