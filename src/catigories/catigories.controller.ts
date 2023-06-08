import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoryService } from './catigories.service';
import { CreateCategoryDto } from './dto/create-catigory.dto';
import { UpdateCategoryDto } from './dto/update-catigory.dto';


@ApiTags('Category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create a category' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.create(createCategoryDto);
  }

  @ApiOperation({ summary: 'Get all category' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.categoryService.getAll();
  }

  @ApiOperation({ summary: 'Get category' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.categoryService.getById(+id);
  }

  @ApiOperation({ summary: 'Update category' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    return await this.categoryService.update(+id, updateCategoryDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.categoryService.delete(id);
  }
}