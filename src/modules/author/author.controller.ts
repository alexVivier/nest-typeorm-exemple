import { Controller, Get } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController {
  constructor(private Service: AuthorService) {}

  @Get()
  findAll() {
    return this.Service.findAll();
  }
}
