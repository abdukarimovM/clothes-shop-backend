import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { 
  ApiOperation, 
  ApiResponse, 
  ApiTags 
} from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PhoneCustomerDto } from './dto/phone-customer.dto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import { AdminAuthGuard } from '../guards/admin-auth.guards';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';


@ApiTags('Customer')
@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @ApiOperation({ summary: 'Create a customer' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto, createCustomerDto.password);
  }

  @ApiOperation({ summary: 'Get all customers' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getAll() {
    return this.customerService.getAll();
  }

  @ApiOperation({ summary: 'Get customer by ID' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getById(@Param('id') id: number) {
    return this.customerService.getById(+id);
  }

  @ApiOperation({ summary: 'Update customer by ID' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async update(@Param('id') id: number, @Body() userData: UpdateCustomerDto) {
    return await this.customerService.update(+id, userData);
  }

  @ApiOperation({ summary: 'Delete customer by ID' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return await this.customerService.delete(id);
  }

  @ApiOperation({ summary: 'Otp phone' })
  @UseGuards(JwtAuthGuard)
  @Post('otp')
  async newOtp(@Body() phoneCustomerDto: PhoneCustomerDto) {
    return await this.customerService.newOTP(phoneCustomerDto);
  }

  @ApiOperation({ summary: 'Otp phone' })
  @Post('verify')
  async verifyOtp(@Body() verifyOtpDto: VerifyOtpDto) {
    return await this.customerService.verifyOtp(verifyOtpDto);
  }

}