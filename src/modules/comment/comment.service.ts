import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor() {}

  findAll() {
    return 'All comments';
  }
}
