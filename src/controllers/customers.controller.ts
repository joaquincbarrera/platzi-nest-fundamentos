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
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateCustomerDto, UpdateCustomerDto } from 'src/dtos/customers.dtos';
import { CustomersService } from 'src/services/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get()
    getProducts() {
      return this.customersService.findAll();
    }
  
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
      return this.customersService.findOne(id);
    }
  
    @Post()
    create(@Body() payload: CreateCustomerDto) {
      return this.customersService.create(payload);
    }
  
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() payload: UpdateCustomerDto) {
      return this.customersService.update(id, payload);
    }
  
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
      return this.customersService.delete(id);
    }

}
