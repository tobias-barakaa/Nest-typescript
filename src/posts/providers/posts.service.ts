import { Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";

@Injectable()
export class PostsService {

    constructor(private readonly UsersService: UsersService){

    }
    public findAllPosts(userId: string) {
        const user = this.UsersService.findOneById(userId);
        return [
            {
                user: user,
                title: 'Post 1',
                content: 'This is post 1 content',
            },
            {
                user: user,
                title: 'Post 2',
                content: 'This is post 2 content',
            }
        ]
    }
}