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
import { PaymentTypeService } from './payment_type.service';
import { CreatePaymentTypeDto } from './dto/create-payment_type.dto';
import { UpdatePaymentTypeDto } from './dto/update-payment_type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Payment-type')
@Controller('payment-type')
export class PaymentTypeController {
  constructor(private readonly paymentTypeService: PaymentTypeService) {}

  @ApiOperation({ summary: 'Create a payment type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createPaymentTypeDto: CreatePaymentTypeDto) {
    return this.paymentTypeService.create(createPaymentTypeDto);
  }

  @ApiOperation({ summary: 'Get all payment-type' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.paymentTypeService.getAll();
  }

  @ApiOperation({ summary: 'Get payment-type' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentTypeService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update payment-type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number, 
    @Body() updatePaymentTypeDto: UpdatePaymentTypeDto
    ) {
    return this.paymentTypeService.update(+id, updatePaymentTypeDto);
  }

  @ApiOperation({ summary: 'Delete payment-type' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.paymentTypeService.delete(+id);
  }
}
