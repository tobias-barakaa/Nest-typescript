import { postType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import { IsString,IsOptional,IsJSON,IsArray, IsISO8601,MinLength, IsNotEmpty, IsEnum, Matches, ValidateNested, IsInt } from 'class-validator';
import { CreatePostMetaOptionDto } from '../../meta-options/dtos/create-post-meta-option.dto';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { ApiPropertyOptional } from '@nestjs/swagger';

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

    @ApiPropertyOptional({
        description: "Array of tags passed as string value",
        type: 'array',
        example: [1,2,3, 'numbers']
    })
    @IsInt({ each: true })
    @IsOptional()
    @IsArray()
    tags: number[];

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreatePostMetaOptionDto)
    metaOptions: CreatePostMetaOptionDto | null;


    @ApiProperty({
        type: 'integer',
        required: true,
        example: 1
    })
    @IsNotEmpty()
    @IsInt()
    authorId: number;


}