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
import { RegionService } from './region.service';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) { }

  @ApiOperation({ summary: 'Create a region' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createRegionDto: CreateRegionDto) {
    return this.regionService.create(createRegionDto);
  }

  @ApiOperation({ summary: 'Get all regions' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.regionService.getAll();
  }

  @ApiOperation({ summary: 'Get region' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.regionService.getOne(+id);
  }

  @ApiOperation({ summary: 'Update region' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ) {
    return await this.regionService.update(+id, updateRegionDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.regionService.delete(id);
  }
}