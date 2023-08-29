import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor() {}

  findAll() {
    return 'All authors';
  }
}
