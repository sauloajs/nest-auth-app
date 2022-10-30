import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book, User]), UsersModule],
  providers: [BooksService],
})
export class BooksModule {}
