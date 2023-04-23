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

  // async getProduct(id: number): Promise<Product[]> {
  //   return await this.products.find({
  //     where: [{ id: id }],
  //   });
  // }

  async findOne(id: number): Promise<Product | undefined> {
    const category = await this.products.find({
      relations: { category: true },
      where: [{ id: id }],
    });
    if (category.length == 1) {
      return category[0];
    } else {
      return undefined;
    }
  }

  async getProductsByCategory(_id: number): Promise<Product[]> {
    return await this.products
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .where('category.id = :categoryId', { categoryId: _id })
      .getMany();
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
