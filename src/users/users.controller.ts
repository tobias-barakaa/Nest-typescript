import { Controller, Get, Post, Patch, Put, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Query, ParseIntPipe } from "@nestjs/common";
import { UsersService } from "./providers/users.service";
import { ApiQuery, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {


constructor(
    // injecting users service
    private readonly usersService: UsersService,
) {}












    @Get('/:id?')
    @ApiOperation({
        summary: 'Fetches a list of regiestered users',
        description: 'This endpoint returns a list of registered users',

    })
    @ApiResponse({
        status: 200,
        description: 'The list of registered users has been successfully fetched',
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'The number of entries returned'
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'The page number',
        example: 12
    })
    public getUsers(@Param('id', ParseIntPipe) id: Number | undefined, params: any, @Query() query: any) {
        console.log(params, 'paramss');
        console.log(query, 'query')
        return "you sent a get request to users"
    };
    @Post()
    public createUsers(@Body() createUserDto: CreateUserDto) {
       return this.usersService.createUser(createUserDto);
    }
}