
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './posts.entity';
import { MetaOptions } from 'src/meta-options/meta-options.entity';
import { TagsModule } from 'src/tags/tags.module';


@Module({
    controllers: [PostsController],
    providers: [PostsService],
    imports: [UsersModule, TypeOrmModule.forFeature([Posts, MetaOptions]), TagsModule]
})

export class PostsModule {}