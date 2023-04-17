import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private products: Repository<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return await this.products.find();
  }

  async getProduct(id: number): Promise<Product[]> {
    return await this.products.find({
      where: [{ id: id }],
    });
  }

  createProduct(product: Product) {
    this.products.save(product);
  }

  updateCreateProduct(id: number, product: Product) {
    this.products.update(id, product);
  }

  deleteProduct(product: Product) {
    this.products.delete(product);
  }
}
