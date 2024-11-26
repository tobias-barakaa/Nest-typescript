import { Injectable } from '@nestjs/common';
// import { TagsService } from 'src/tags/providers/tags.service';
import { PostsService } from 'src/posts/providers/posts.service';
import { CreateTagDto } from '../dtos/create-tag.dto';
import {Repository} from 'typeorm';
import { Tag } from '../tag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In } from 'typeorm';

@Injectable()
export class TagsService {
    constructor(

        @InjectRepository(Tag)
        private readonly tagsREspository: Repository<Tag>,
        // private readonly tagsService: TagsService,
        // private readonly postsService: PostsService,
    ) {}

    public async create(createTagDto: CreateTagDto) {
        let tag = this.tagsREspository.create(createTagDto);
        return await this.tagsREspository.save(tag);
    }

    public async findMultipleTags(tags: number[]) {
        let results = await this.tagsREspository.find({
            where: {
                id: In(tags)
            }
        });

        return results;
    }

    public async delete(id: number) {
        await this.tagsREspository.delete(id);
        return {
            deleted: true,
            id,
        };
    }

    public async softRemove(id: number) {
        await this.tagsREspository.softDelete(id);
        return {
            deleted: true,
            id,
        };

        
    }
}
