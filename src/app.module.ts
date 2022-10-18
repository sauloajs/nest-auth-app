import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { CategoriesController } from './categories/categories.controller';
import * as dotenv from 'dotenv';
import { Book } from './books/entities/book.entity';

dotenv.config();

@Module({
  imports: [
    BooksModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Book],
      synchronize: true,
    }),
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
