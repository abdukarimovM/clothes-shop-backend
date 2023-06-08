import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrderItemsService } from './order_items.service';
import { CreateOrderItemDto } from './dto/create-order_item.dto';
import { UpdateOrderItemDto } from './dto/update-order_item.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Order-items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) { }

  @ApiOperation({ summary: 'Create a oreder' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }


  @ApiOperation({ summary: 'Get all Order' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.orderItemsService.getAll();
  }


  @ApiOperation({ summary: 'Get Order' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.orderItemsService.getOne(+id);
  }


  @ApiOperation({ summary: 'Update Order' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return await this.orderItemsService.update(+id, updateOrderItemDto);
  }

  @ApiOperation({ summary: 'Delete order' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.orderItemsService.delete(id);
  }
}
