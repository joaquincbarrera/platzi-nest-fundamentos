import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { BrandsController } from './controllers/brands.controller';
import { UsersController } from './controllers/users.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomersService } from './services/customers.service';
import { CategoriesService } from './services/categories.service';
import { BrandsService } from './services/brands.service';
import { UsersService } from './services/users.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, BrandsController, UsersController, CustomersController],
  providers: [AppService, ProductsService, CustomersService, CategoriesService, BrandsService, UsersService],
})
export class AppModule {}
