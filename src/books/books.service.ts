import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(userId: number, createBookDto: CreateBookDto) {
    const newBook = await this.booksRepository.save(createBookDto);
    const user = await this.usersRepository.findOne({
      where: {
        id: userId.toString(),
      },
      relations: ['books'],
    });

    user.books.push(newBook);

    await this.usersRepository.save(user);
  }

  async findAll(userId: number): Promise<Book[]> {
    const user = await this.usersRepository.findOne({
      where: { id: userId.toString() },
      relations: ['books'],
    });

    return user.books;
  }

  findOne(id: number): Promise<Book> {
    return this.booksRepository.findOneBy({ id });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book ${updateBookDto.name}`;
  }

  async remove(id: number): Promise<void> {
    await this.booksRepository.delete(id);
  }
}
