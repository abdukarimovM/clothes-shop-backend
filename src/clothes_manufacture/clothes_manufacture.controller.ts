import { 
  Controller, 
  Get, 
  Post, 
  Body,  
  Param, 
  Delete,
  Put, 
} from '@nestjs/common';
import { ManufactureService } from './clothes_manufacture.service';
import { CreateManufactureDto } from './dto/create-clothes_manufacture.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateManufactureDto } from './dto/update-clothes_manufacture.dto';

@ApiTags('Manufacture')
@Controller('manufacture')

export class ManufactureController {
  constructor(private readonly manufactureService: ManufactureService) {}

  @ApiOperation({ summary: 'Create a manufacture' })
  @Post()
  create(@Body() createManufactureDto: CreateManufactureDto) {
    return this.manufactureService.create(createManufactureDto);
  }

  @ApiOperation({ summary: 'Get all manufacture' })
  @Get()
  findAll() {
    return this.manufactureService.findAll();
  }

  @ApiOperation({ summary: 'Get One manufacture' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.manufactureService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update manufacture' })
  @Put(':id')
  async update(
    @Param('id') id: number, 
    @Body() updateManufactureDto: UpdateManufactureDto
    ) {
    return await this.manufactureService.update(+id, updateManufactureDto);
  }
  
  @ApiOperation({ summary: 'Delete flat' })
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.manufactureService.delete(+id);
  }
}
