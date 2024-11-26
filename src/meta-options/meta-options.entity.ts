import { Posts } from "src/posts/posts.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class MetaOptions {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'json',
        nullable: false,
    })
    metaValue: string;

    @CreateDateColumn({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    createDate: Date;

    @UpdateDateColumn({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    updateDate: Date;

    @JoinColumn()
    @OneToOne(() => Posts, (post) => post.metaOptions, {
        onDelete: 'CASCADE',
    })
    post: Posts;

}