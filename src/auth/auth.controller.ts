import { Controller, Post, Body, HttpCode, Res, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { LoginDto } from './dto/login-customer.dto';
import { CreateCustomerDto } from '../customer/dto/create-customer.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Login Customer' })
  @HttpCode(200)
  @Post('login')
  login(@Body() loginDto: LoginDto, @Res({ passthrough: true }) res: Response) {
    return this.authService.login(loginDto, res);
  }

  @ApiOperation({ summary: 'Register Customer' })
  @Post('register')
  registration(
    @Body() createUserDto: CreateCustomerDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.registration(createUserDto, res);
  }

  @ApiOperation({ summary: 'Logout Customer' })
  @HttpCode(200)
  @Post('logout')
  logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.logout(refreshToken, res);
  }

  @Post(':id/refresh')
  refresh(
    @Param('id') id: number,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.authService.refreshToken(+id, refreshToken, res);
  }
}