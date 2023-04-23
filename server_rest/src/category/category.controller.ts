import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryService } from './category.service';
import { Category } from './entities/category.entity';

@Controller('category')
export class CategoryController {
  constructor(private readonly service: CategoryService) {}

  @UseGuards(AuthGuard('jwt-admin'))
  @Post()
  create(@Body() category: Category) {
    return this.service.createCategory(category);
  }

  @Get()
  findAll() {
    return this.service.getCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.getCategory(+id);
  }

  @Get(':id/product')
  getProducts(@Param() params) {
    return this.service.getCategoryProducts(params.id);
  }

  @UseGuards(AuthGuard('jwt-admin'))
  @Patch(':id')
  update(@Param('id') id: string, @Body() category: Category) {
    return this.service.updateCategory(+id, category);
  }

  @UseGuards(AuthGuard('jwt-admin'))
  @Delete(':id')
  remove(@Param('id') category: Category) {
    return this.service.deleteCategory(category);
  }
}
