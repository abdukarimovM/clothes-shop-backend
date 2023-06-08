import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { CustomerService } from '../customer/customer.service';
import { JwtService } from '@nestjs/jwt';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { MailService } from '../mail/mail.service';
import { LoginDto } from './dto/login-customer.dto';
import { Response } from 'express';
import { Customer } from '../customer/entities/customer.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService,
    private readonly mailService: MailService
  ) {}

  async registration(customerDto: CreateCustomerDto, res: Response) {
    // const customerIsExist = await this.customerService.getByEmail(customerDto.email);
    // if (customerIsExist) {
    //   throw new HttpException(`Bunday customer mavjud`, HttpStatus.BAD_REQUEST);
    // }
 
    const hashedPassword = await bcrypt.hash(customerDto.password, 7);
    const customer = await this.customerService.create(
      { ...customerDto },
      hashedPassword,
    );
    const tokens = await this.getToken(customer);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const uniqueKey: string = uuidv4();

    const updatedCustomer = await this.customerService.update(customer.id, {
      ...customer,
      hashed_refresh_token: hashed_refresh_token,
      activation_link: uniqueKey,
    });

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    // await this.mailService.sendCustomerConfirmation(updatedCustomer[1][0]);

    const response = {
      message: 'USER REGISTERED',
      user: updatedCustomer[1][0],
      tokens,
    };
    return response;
  }

  async login(loginDto: LoginDto, res: Response) {
    const { email, password } = loginDto;
    const customer = await this.customerService.getByEmail(email);
    if (!customer) {
      throw new HttpException(`Bunday mavjud emas`, HttpStatus.BAD_REQUEST);
    }
    const isMatchPass = await bcrypt.compare(password, customer.hashed_password);
    if (!isMatchPass) {
      throw new UnauthorizedException(`Customer not registered`);
    }
    const tokens = await this.getToken(customer);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedCustomer = await this.customerService.update(customer.id, {
      ...customer,
      hashed_refresh_token: hashed_refresh_token,
    });

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'CUSTOMER LOGIN',
      user: updatedCustomer[1][0],
      tokens,
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const customerData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!customerData) {
      throw new ForbiddenException('Customer not found');
    }
    const updatedCustomer = await this.customerService.update(customerData.id, {
      hashed_refresh_token: refreshToken,
    });
    res.clearCookie('refresh_token');
    const response = {
      message: 'Customer logged out successfully',
      customer: updatedCustomer[1][0],
    };
    return response;
  }

  private async getToken(customer: Customer) {
    const payload = {
      id: customer.id,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
    ]);
    return { access_token: accessToken, refresh_token: refreshToken };
  }

  async refreshToken(customer_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);

    if (customer_id != decodedToken['id']) {
      throw new BadRequestException('Customer not found');
    }
    const customer = await this.customerService.getById(customer_id);
    if (!customer || !customer.hashed_password) {
      throw new BadRequestException('Customer not found');
    }

    const tokenMatch = await bcrypt.compare(refreshToken, customer.hashed_password);
    const tokens = await this.getToken(customer);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const updatedCustomer = await this.customerService.update(customer.id, {
      hashed_refresh_token: hashed_refresh_token,
    });
  }

  private async validateCustomer(loginDto: LoginDto) {
    const customer = await this.customerService.getByEmail(loginDto.email);

    if (
      !customer ||
      !(await bcrypt.compare(loginDto.password, customer.hashed_password))
    ) {
      throw new UnauthorizedException('Email yoki password XATO !!!');
    }

    return customer;
  }
}