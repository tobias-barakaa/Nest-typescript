import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON,  IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, maxLength, MinLength } from "class-validator";

export class CreateTagDto {
    @ApiProperty()
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @MaxLength(100)
    name: string;

    @ApiProperty({
        description: 'Slug is a unique identifier for the tag. It is used in the URL to identify the tag.',
        example: 'my blog post'
    })
    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    @MaxLength(256)
    @Matches(/^[a-zA-Z0-9-]+$/, {message:
        'A slug should be all small letters'
    })
    slug: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    description?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MaxLength(1024)
    @IsJSON()
    schema: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsUrl()
    @MaxLength(1024)
    featuredImageUrl?: string;

    

}