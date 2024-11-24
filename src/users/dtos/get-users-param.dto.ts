import { IsInt, IsOptional, IsPositive } from "class-validator";
import { Type } from "class-transformer";
import { ApiPropertyOptional } from "@nestjs/swagger";

export class GetUsersParamsDto {
    @ApiPropertyOptional({
        description: 'Get user with a specific id',
        type: Number,
        example: 1234
    })
    @IsOptional()
    @IsInt()
    @Type(() => Number)
    id?: number;
}