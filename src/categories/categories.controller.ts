import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoriesController {
  @Get()
  findAll(): string {
    return 'This action is under implementation';
  }

  @Post()
  store(@Body() createCategoryDto: CreateCategoryDto): void {
    console.log(createCategoryDto);
  }
}
