import { TypeOrmModule } from "@nestjs/typeorm";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { postStatus } from "./enums/postStatus.enum";
import { CreatePostMetaOptionDto } from "./dtos/create-post-meta-option.dto";
import { postType } from "./enums/postType.enum";


@Entity()
export class Posts{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'text',
        nullable: false,
    })
    content: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })

    @Column({
        length: 100,
        type: 'enum',
        enum: postType,
        nullable: false,
        default: postType.POST
    })
    postType: postType;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
        unique: true,
    })
    slug: string;

    @Column({
        type: 'enum',
        length: 100,
        nullable: false,
        enum: postStatus,
        default: postStatus.DRAFT,
        update: false,  // Don't allow status to be updated after creation.

    })
    status: postStatus;

    @Column({
        type: 'text',
        nullable: true
    })
    schema: string;

    @Column({

    })
    tags: string;
    metaOptions: CreatePostMetaOptionDto[];
    featuredImage?: string;
    @Column({
        type: 'timestamp',
        nullable: true,
        default: () => 'CURRENT_TIMESTAMP',
        update: false,  // Don't allow createdAt to be updated after creation.
    })
    publishOn: boolean;

    
}