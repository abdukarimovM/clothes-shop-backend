import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Card } from './entities/card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(@InjectModel(Card) private cardRepo: typeof Card) {}

  async createCard(createCardDto: CreateCardDto) {
    const newCard = await this.cardRepo.create(createCardDto);
    return newCard;
  }

  async getAllCards() {
    const result = await this.cardRepo.findAll({
      include: { all: true },
    });
    return result;
  }

  async getCardById(id: number) {
    const result = await this.cardRepo.findByPk(id);
    return result;
  }

  async updateCard(id: number, updateCardDto: UpdateCardDto) {
    const result = await this.cardRepo.update(updateCardDto, {
      where: { id },
    });
    return result;
  }

  async deleteCard(id: number): Promise<number> {
    const result = await this.cardRepo.destroy({ where: { id } });
    return result;
  }
}
