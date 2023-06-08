import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete,
  Put,
  UseGuards
 } from '@nestjs/common';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Card')
@Controller('card')
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({ summary: 'Create a card' })
  @Post()
  createCard(@Body() createCardDto: CreateCardDto) {
    return this.cardService.createCard(createCardDto);
  }

  @ApiOperation({ summary: 'Get all cards' })
  @Get()
  getAllCards() {
    return this.cardService.getAllCards();
  }

  @ApiOperation({ summary: 'Get card' })
  @Get(':id')
  getCardById(@Param('id') id: string) {
    return this.cardService.getCardById(+id);
  }

  @ApiOperation({ summary: 'Update card' })
  @Put(':id')
  async updateCard(@Param('id') id: number, @Body() updateCardDto: UpdateCardDto) {
    return await this.cardService.updateCard(+id, updateCardDto);
  }

  @ApiOperation({ summary: 'Delete card' })
  @Delete(':id')
  async deleteCard(@Param('id') id: number): Promise<number> {
    return await this.cardService.deleteCard(id);
  }
}
