import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsService } from './services/products.service';
import { CustomersController } from './controllers/customers.controller';

@Module({
  imports: [],
  controllers: [ CategoriesController, CustomersController],
  providers: [ProductsService],
  exports: [ProductsService]
})
export class ProductsModule {}
