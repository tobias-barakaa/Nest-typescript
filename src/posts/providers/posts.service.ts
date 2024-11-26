import { Body, Injectable } from "@nestjs/common";
import { UsersService } from "src/users/providers/users.service";
import { CreatePostDto } from "../dtos/create-post.dto";
import { Repository } from "typeorm";
import { Posts } from "../posts.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { MetaOptions } from "src/meta-options/meta-options.entity";
import { TagsService } from "src/tags/providers/tags.service";
import { PatchPostDto } from "../dtos/patch-post.dto";

@Injectable()
export class PostsService {

    constructor(private readonly UsersService: UsersService,
    /**
     * INject Post Repository
     * 
     */
  @InjectRepository(Posts)  
  private readonly postRepository: Repository<Posts>,
  /**
   * inject metaOptions Repository
   */

  public readonly metaOptionsRepository: Repository<MetaOptions>,

  /**
   * Inject tags service
   */

  private readonly tagsService: TagsService
    ){

    }

    public async create(@Body() createPostDto: CreatePostDto) {
        // find the author from the database based on the authorId
        let author = await this.UsersService.findOneById(createPostDto.authorId);
        // create a new post

        let tags = await this.tagsService.findMultipleTags(createPostDto.tags);
      
        let post = this.postRepository.create({...createPostDto, author: author, tags: tags});

        return await this.postRepository.save(post);

        // return the post to the user

    }

    public async findAll(userId: string) {
        let posts = await this.postRepository.find({
            relations: {
                metaOptions: true,
                author: true,
                tags: true,
            }
        })
        return posts
    }
    // public findAllPosts(userId: string) {}

    public async delete(id: number) {
        // find the posts to which user send the id

        // // delete the post
        await this.postRepository.delete(id);


        // // Delete the meta options
        // await this.metaOptionsRepository.delete(post.metaOptions.id);

        // //Confirmation message

        return { deleted: true, id }

    }

    public async update(patchpostDto: PatchPostDto) {
        // find the tags
        let tags = await this.tagsService.findMultipleTags(patchpostDto.tags);

        // Find the Post
        let post = await this.postRepository.findOneBy({id: patchpostDto.id})
        // update the peroperties
        post.title = patchpostDto.title ?? post.title;
        post.content = patchpostDto.content ?? post.content;
        post.status = patchpostDto.status ?? post.status;
        post.postType = patchpostDto.postType ?? post.postType;
        post.slug = patchpostDto.slug ?? post.slug;
        post.featuredImage = patchpostDto.featuredImage ?? post.featuredImage;
        post.publishOn = typeof patchpostDto.publishOn === 'boolean' ? patchpostDto.publishOn : post.publishOn;


        // assign the new tags
        post.tags = tags;
        //save the post and return

        return await this.postRepository.save(post);
    };


    public async delete(id: number) {
        await this.postRepository.delete(id);
        return { deleted: true, id };
    }
       
}