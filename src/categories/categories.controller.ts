import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
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
