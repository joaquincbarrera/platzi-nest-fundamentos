import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    //ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from 'src/dtos/users.dtos';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { UsersService } from 'src/services/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}
    @Get()
    getProducts() {
      return this.userService.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
      return this.userService.findOne(id);
    }
  
    @Post()
    create(@Body() payload: CreateUserDto) {
      return this.userService.create(payload);
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateUserDto) {
      return this.userService.update(id, payload);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.userService.delete(id);
    }
}
