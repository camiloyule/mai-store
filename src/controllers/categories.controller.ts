import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getProductsByCategory(
    @Param('categoryId') categoryId: string,
    @Param('productId') productId: string,
  ) {
    return `product ${productId} and category ${categoryId}`;
  }
}
