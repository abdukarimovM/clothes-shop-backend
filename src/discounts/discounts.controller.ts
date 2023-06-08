import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DiscountsService } from './discounts.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Discount')
@Controller('discount')
export class DiscountsController {
  constructor(private readonly discountsService: DiscountsService) {}

  @ApiOperation({ summary: 'Create a discount' })
  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto) {
    return this.discountsService.create(createDiscountDto);
  }

  @ApiOperation({ summary: 'Get all discount' })
  @Get()
  getAll() {
    return this.discountsService.getAll();
  }

  @ApiOperation({ summary: 'Get discount' })
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.discountsService.getOne(+id);
  }

  @ApiOperation({ summary: 'Update discount' })
  @Put(':id')
  update(@Param('id') id: number, @Body() updateDiscountDto: UpdateDiscountDto) {
    return this.discountsService.update(+id, updateDiscountDto);
  }

  @ApiOperation({ summary: 'Delete discount' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.discountsService.delete(id);
  }
}
