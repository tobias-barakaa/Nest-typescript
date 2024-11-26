import { IsString, IsNotEmpty, IsJSON } from 'class-validator';

export class CreatePostMetaOptionDto {
    @IsNotEmpty()
    @IsJSON()
    metaValue: string;
}