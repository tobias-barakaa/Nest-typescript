import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsArray, IsEnum, IsOptional, IsString } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

export class PatchPostDto extends PartialType (CreatePostDto) {
    @ApiProperty({
        description: 'The title of the post',
        type: String,
        example: 'My first post'
    })
    @IsString()
    @IsOptional()
    title: string;

    @IsString()
    @IsOptional()
    content: string;

   
}