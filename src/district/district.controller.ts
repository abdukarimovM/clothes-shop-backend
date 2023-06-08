
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
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';


@ApiTags('District')
@Controller('district')
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: 'Create a district' })
  @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: 'Get all district' })
  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.districtService.getAll();
  }

  @ApiOperation({ summary: 'Get district' })
  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  getDistrictById(@Param('id') id: number) {
    return this.districtService.getOne(+id);
  }

  @ApiOperation({ summary: 'Update district' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDistrictDto: UpdateDistrictDto,
  ) {
    return await this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  // @UseGuards(JwtAuthGuard)
  // @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.districtService.delete(id);
  }
}