import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { IsString,IsOptional,IsJSON,IsArray, IsISO8601,MinLength, IsNotEmpty, IsEnum, Matches, ValidateNested } from 'class-validator';
import { CreatePostMetaOptionDto } from './create-post-meta-option.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
    @ApiProperty({
        description: 'The title of the post',
        type: String,
        example: 'My first post'
    })
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    title: string;

    @ApiProperty({
        description: 'The type of the post',
        type: String,
        example: 'post'
    })
    @IsEnum(postType)
    @IsNotEmpty()
    postType: postType;

    @ApiProperty({
        description: 'The slug of the post',
        type: String,
        example: 'my-first-post'
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be a valid slug' })
    slug: string;

    @ApiProperty({
        description: 'The status of the post',
        type: String,
        example: 'draft'
    })
    @IsString()
    @IsNotEmpty()
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, { message: 'slug must be a valid slug' })
    status: postStatus;

    @ApiProperty({
        description: 'The content of the post',
        type: String,
        example: 'This is my first post        content'
    })
    @IsString()
    @IsOptional()
   content?: string;

    @IsString()
    @IsOptional()
    excerpt?: string;

    @IsString()
    @IsJSON()
   schema?: string;

   @IsOptional()
    featuredImage?: string;

    @IsISO8601()
    @IsOptional()
    publishOn?: Date;

    @IsString({ each: true })
    @MinLength(3, { each: true })
    @IsOptional()
    @IsArray()
    tags: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionDto)
    metaOptions: CreatePostMetaOptionDto[]

}