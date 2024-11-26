import { Posts } from 'src/posts/posts.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    firstName: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    lastName: string;

    @Column(
        {
            type: 'varchar',
            length: 100,
            nullable: false,
            unique: true,
        }
    )
    email: string;

    @Column(
        {
            type: 'varchar',
            length: 100,
            nullable: false,
        }
    )
    password: string;
    @OneToMany(() => Posts, (post) => post.author)
    posts: Posts[];
   

}