import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PhoneCustomerDto } from './dto/phone-customer.dto';
import * as otpGenerator from 'otp-generator';
import { AddMinutesToDate } from '../helpers/addMinutes';
import { Otp } from '../otp/entities/otp.entity';
import { Op } from 'sequelize';
import { v4 as uuidv4, v4 } from 'uuid';
import { dates, decode, encode } from '../helpers/crypto';
import { VerifyOtpDto } from './dto/verifyOtp.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer) private customerRepo: typeof Customer,
    @InjectModel(Otp) private otpRepo: typeof Otp,
  ) {}

  async create(createCustomerDto: CreateCustomerDto, hashed_password: string) {
    const newCustomer = await this.customerRepo.create({
      ...createCustomerDto,
      hashed_password,
    });
    return newCustomer;
  }

  async getAll() {
    const customers = await this.customerRepo.findAll({ include: { all: true } });
    return customers;
  }


  async getByEmail(email: string) {
    const customer = await this.customerRepo.findOne({
      where: { email },
      include: { all: true },
    });
    return customer;
  }

  async getById(id: number) {
    const customer = await this.customerRepo.findByPk(id);
    return customer;
  }

  async update(id: number, updatedCustomer: UpdateCustomerDto) {
    const customer = await this.customerRepo.update(updatedCustomer, {
      where: { id },
      returning: true,
    });
    return customer;
  }

  async delete(id: number): Promise<number> {
    const result = await this.customerRepo.destroy({ where: { id } });
    return result;
  }


  async newOTP(phoneCustomerDto: PhoneCustomerDto) {
    const phone_number = phoneCustomerDto.phone;
    const otp = otpGenerator.generate(4, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
   
    const now = new Date();
    const expiration_time = AddMinutesToDate(now, 5);
    await this.otpRepo.destroy({
      where: { [Op.and]: [{ check: phone_number }, { verified: false }] },
    });
    const newOtp = await this.otpRepo.create({
      id: v4(),
      otp,
      expiration_time,
      check: phone_number,
    });
    const details = {
      timestamp: now,
      check: phone_number,
      success: true,
      message: 'OTP sent to customer',
      otp_id: newOtp.id,
    };
    const encoded = await encode(JSON.stringify(details));
    return { status: 'Success', Details: encoded };
  }

  async verifyOtp(verifyOtpDto: VerifyOtpDto) {
    const { verification_key, otp, check } = verifyOtpDto;
    const currentdate = new Date();
    const decoded = await decode(verification_key);
    const obj = JSON.parse(decoded);
    const check_obj = obj.check;
    if (check_obj != check)
      throw new BadRequestException('OTP bu raqamga yuborilmagan');
    const result = await this.otpRepo.findOne({ where: { id: obj.otp_id } });
    if (result != null) {
      if (!result.verified) {
        if (dates.compare(result.expiration_time, currentdate)) {
          if (otp === result.otp) {
            const customer = await this.customerRepo.findOne({
              where: { phone_number: check },
            });
            if (customer) {
              const updatedCustomer = await this.customerRepo.findOne(
                { where: { id: customer.id }},
              );
              await this.otpRepo.update(
                { verified: true },
                { where: { id: obj.otp_id }, returning: true },
              );
              const response = {
                message: 'Customer updated as owner',
                customer: updatedCustomer[1][0],
              };
              return response;
            }
          } else {
            throw new BadRequestException('Otp is not match');
          }
        } else {
          throw new BadRequestException('Otp expired');
        }
      } else {
        throw new BadRequestException('Otp already used');
      }
    } else {
      throw new BadRequestException('Bunday foydalanuvchi yo`q');
    }
  }
}