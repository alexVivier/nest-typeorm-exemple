import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { CommentModule } from "./modules/comment/comment.module";

@Module({
  imports: [ArticleModule, AuthorModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
