import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { TagsService } from './providers/tags.service';
import { CreateTagDto } from './dtos/create-tag.dto';
import { Delete } from '@nestjs/common';
import { Query } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';




@Controller('tags')
export class TagsController {
    constructor(
        private readonly tagsService: TagsService,

    ) {}
    @Post()
    public create(@Body() createTagDto: CreateTagDto) {
        return this.tagsService.create(createTagDto);
        
    }

    @Delete()
    public async delete(@Query('id', ParseIntPipe)id: number) {
        return this.tagsService.delete(id);
    }

    @Delete('soft-delete')
    public async softDelete(@Query('id', ParseIntPipe)id: number) {
        return this.tagsService.softRemove(id);
    }
}
