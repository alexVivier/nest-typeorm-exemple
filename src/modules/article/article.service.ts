import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from '../../entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article) private readonly repo: Repository<Article>,
  ) {}
  create(body) {
    return this.repo.save(body);
  }

  findAll() {
    return this.repo.find();
  }
}
