import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePostMetaOptionDto {
    @IsString()
    @IsNotEmpty()
    key: number;

    @IsNotEmpty()
    value: any;
}