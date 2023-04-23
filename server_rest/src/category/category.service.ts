import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categories: Repository<Category>,
    @Inject(ProductsService) private products: ProductsService,
  ) {}

  async createCategory(category: Category) {
    return await this.categories.save(category);
  }

  async getCategories(): Promise<Category[]> {
    return await this.categories.find();
  }

  async getCategory(id: number): Promise<Category[]> {
    return await this.categories.find({
      where: [{ id: id }],
    });
  }

  async getCategoryProducts(id: number): Promise<Product[]> {
    return await this.products.getProductsByCategory(id);
  }

  async updateCategory(id: number, category: Category) {
    return await this.categories.update(id, category);
  }

  deleteCategory(category: Category) {
    return this.categories.delete(category);
  }
}
