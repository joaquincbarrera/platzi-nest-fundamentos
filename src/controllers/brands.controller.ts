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
import { BrandsService } from 'src/services/brands.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateBrandDto, UpdateBrandDto } from 'src/dtos/brands.dtos copy';


@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get()
  getProducts() {
    return this.brandsService.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.findOne(id);
  }

  @Post()
  create(@Body() payload: CreateBrandDto) {
    return this.brandsService.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateBrandDto,
  ) {
    return this.brandsService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.brandsService.delete(id);
  }
}
