import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  constructor() {}

  findAll() {
    return 'All articles';
  }
}
