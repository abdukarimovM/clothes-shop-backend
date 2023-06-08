import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ClothesService } from './clothes.service';
import { CreateClotheDto } from './dto/create-clothe.dto';
import { UpdateClotheDto } from './dto/update-clothe.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Clothes')
@Controller('clothes')
export class ClothesController {
  constructor(private readonly clothesService: ClothesService) {}

  @ApiOperation({ summary: 'Create a Clothes' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createClotheDto: CreateClotheDto) {
    return this.clothesService.create(createClotheDto);
  }

  @ApiOperation({ summary: 'Get all clothes' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.clothesService.getAll();
  }


  @ApiOperation({ summary: 'Get stadium' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.clothesService.getOne(+id);
  }


  @ApiOperation({ summary: 'Update clothes' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number, 
    @Body() updateClotheDto: UpdateClotheDto,
    ) {
    return await this.clothesService.update(+id, updateClotheDto);
  }


  @ApiOperation({ summary: 'Delete Clothes' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.clothesService.delete(id);
  }
}
