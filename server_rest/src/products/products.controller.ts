import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Product } from './entities/product.entity';
import { ProductsService } from './products.service';

@Controller('product')
export class ProductsController {
  constructor(private service: ProductsService) {}

  @Post()
  create(@Body() product: Product) {
    return this.service.createProduct(product);
  }

  @Get()
  getProducts() {
    return this.service.getProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getProduct(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() product: Product) {
    return this.service.updateCreateProduct(+id, product);
  }

  @Delete(':id')
  remove(@Param('id') product: Product) {
    return this.service.deleteProduct(product);
  }
}
