import { Body, Controller, Post } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/create-post-meta-option.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {

    constructor(
        private readonly metaOptionService: MetaOptionsService,
    ) {}
    @Post()
    public create(@Body() createPostMetaOptionDto: CreatePostMetaOptionDto) {
        return this.metaOptionService.create(createPostMetaOptionDto);
    }

}
