import { Injectable , NotFoundException} from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './../dtos/product.dtos';

@Injectable()
export class ProductsService {
  private counterId = 1;

  private products: Product[]=[
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
      stock: 25
    },
  ];

  findAll() {
    console.log(this.products);
    return this.products;
  }
  findOne(id: number) {
    const product= this.products.find((item) => item.id === id);
    if(!product){
      // return null;
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }
  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (product) {
      const index = this.products.indexOf(product);
      //this is a merge with spread operators
      this.products[index] = {
        ...product,
        ...payload,
      };
      return this.products[index];
    }
    return null;
  }
  remove(id: number) {
    // const product = this.findOne(id);
    const index = this.products.findIndex((item) => item.id === id);
    if (index=== -1) {
      // const index = this.products.indexOf(product);
      throw new NotFoundException(`Product #${id} not found`);

    }
    this.products.splice(index, 1);
    return true;
  }
}
