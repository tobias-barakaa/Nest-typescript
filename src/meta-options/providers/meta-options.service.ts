import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from '../dtos/create-post-meta-option.dto';
import { MetaOptions } from '../meta-options.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {
    
    constructor(
        @InjectRepository(MetaOptions)
        private readonly metaOptionsRepository: Repository<MetaOptions>
    ) {}
    public async create(createPostMetaOptionDto: CreatePostMetaOptionDto) {
        let metaOption = this.metaOptionsRepository.create(createPostMetaOptionDto);
        return await this.metaOptionsRepository.save(metaOption);
    }
}
