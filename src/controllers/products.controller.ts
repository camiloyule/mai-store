import { Controller } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/product.dtos';

import {
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
  // ParseIntPipe
} from '@nestjs/common';

import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';

import { Response } from 'express';


@Controller('products')
export class ProductsController {

  constructor(private productService: ProductsService){}

  @Get('nuevo')
  newEndPoint(): string {
    return 'new';
  }
  @Get('filter')
  pathEndPoint(): string {
    return 'filter';
  }
  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  // express way
  // getOne(@Res() response: Response, @Param('productId') productId: string) {
  getOne( @Param('productId',ParseIntPipe) productId: number) {
    // return {
    //   message: `product ${productId}`,
    // };
    // this is below the express way
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });

    return this.productService.findOne(productId);

  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products: limit=> ${limit} offset=>${offset} brand ${brand}`,
    // };
    console.log("mai");
    return this.productService.findAll();
  }
  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'to create',
    //   payload,
    // };
    console.log(payload);
    return this.productService.create(payload);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
