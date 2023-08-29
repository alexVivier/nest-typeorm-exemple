import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './modules/article/article.module';
import { AuthorModule } from './modules/author/author.module';
import { CommentModule } from './modules/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ArticleModule,
    AuthorModule,
    CommentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blogexemple',
      entities: ['dist/**/*entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
