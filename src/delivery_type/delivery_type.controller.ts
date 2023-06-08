import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete, 
  Put
} from '@nestjs/common';
import { DeliveryTypeService } from './delivery_type.service';
import { CreateDeliveryTypeDto } from './dto/create-delivery_type.dto';
import { UpdateDeliveryTypeDto } from './dto/update-delivery_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Delivery-type')
@Controller('delivery-type')
export class DeliveryTypeController {
  constructor(private readonly deliveryTypeService: DeliveryTypeService) {}

  @ApiOperation({ summary: 'Create a delivery type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createDeliveryTypeDto: CreateDeliveryTypeDto) {
    return this.deliveryTypeService.create(createDeliveryTypeDto);
  }

  @ApiOperation({ summary: 'Get all delivery-type' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.deliveryTypeService.getAll();
  }

  @ApiOperation({ summary: 'Get delivery-type' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.deliveryTypeService.getOne(+id);
  }

  @ApiOperation({ summary: 'Update delivery-type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  update(@Param('id') id: number, @Body() updateDeliveryTypeDto: UpdateDeliveryTypeDto) {
    return this.deliveryTypeService.update(+id, updateDeliveryTypeDto);
  }

  @ApiOperation({ summary: 'Delete delivery-type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.deliveryTypeService.delete(+id);
  }
}
