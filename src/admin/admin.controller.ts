import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Put } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../guards/jwt-auth.guards';
import { AdminAuthGuard } from '../guards/admin-auth.guards';

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

 
  @ApiOperation({ summary: 'Create a Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Post('create')
  createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }

  @ApiOperation({ summary: 'Get all Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Get('all')
  getAllAdmins() {
    return this.adminService.getAllAdmins();
  }

  @ApiOperation({ summary: 'Get Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Get(':id')
  getAdminById(@Param('id') id: number) {
    return this.adminService.getAdminById(+id);
  }

  @ApiOperation({ summary: 'Update Admin' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Put(':id')
  async updateAdmin(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ) {
    return await this.adminService.updateAdmin(+id, updateAdminDto);
  }

  @ApiOperation({ summary: 'Delete user' })
  @UseGuards(JwtAuthGuard)
  @UseGuards(AdminAuthGuard)
  @Delete(':id')
  async deleteAdmin(@Param('id') id: number): Promise<number> {
    return await this.adminService.deleteAdmin(id);
  }
}
