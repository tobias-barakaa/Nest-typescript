import { Controller, Get, Param, Post, Body, Patch, Delete, Query, ParseIntPipe } from "@nestjs/common";
import { PostsService } from "./providers/posts.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreatePostDto } from "./dtos/create-post.dto";


/**
 * class to connect users
 */
@Controller('posts')
@ApiTags('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    

    @Get(':userId?')
    public getPosts(@Param('userId') userId: string) {
        return this.postsService.findAll(userId);
    }

    @ApiOperation({
        summary: 'Creates a new post',
        description: 'Create a new post',
    })
    @ApiResponse({
        status: 201,
        description: 'The post has been successfully created',
    })
    @ApiResponse({
        status: 400,
        description: 'Bad request',
    })
    @Post()
    public createPost(@Body() createpostDto: CreatePostDto) {
        return this.postsService.create(createpostDto)
    }

    @Patch()
    public updatePost(@Body()  patchPostsDto: any) {
        return this.postsService.update(patchPostsDto);
    }

    @Delete()
    public deletePost(@Query('id', ParseIntPipe)id: number) {
        return this.postsService.delete(id);
    }
}