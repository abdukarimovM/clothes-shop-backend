import { Module } from '@nestjs/common';
import { FlatService } from './flat.service';
import { FlatController } from './flat.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Flat } from './entities/flat.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SequelizeModule.forFeature([Flat]), JwtModule],
  controllers: [FlatController],
  providers: [FlatService]
})
export class FlatModule {}
