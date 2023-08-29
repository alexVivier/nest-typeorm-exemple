import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from '../../entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(Author) private readonly repo: Repository<Author>,
  ) {}
  create(body) {
    return this.repo.save(body);
  }

  findAll() {
    return this.repo.find();
  }
}
