import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UsersService{
    constructor(
        // injecting auth service
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) {}

    public async createUser(createUserDto: CreateUserDto) {
        // check if user already exist with the same email
        const existingUser = await this.usersRepository.findOne({
            where: {
                email: createUserDto.email
            }
        })

        // if user exist handle exception

        // create a new user
        let newUser = this.usersRepository.create(createUserDto);
        newUser = await this.usersRepository.save(newUser);

        return newUser;
    }































    public findAll(getUserParamDto: CreateUserDto,
        limit: number,
        page: number
    ) {
        return [
            {
                firstName: 'John',
                lastName: 'Doe',
            },
            {
                firstName: 'Jane',
                lastName: 'Doe',
            },
        ]
    }


    // find a user by Id

    public findOneById(id: number) {
        return {
            id: 123,
            firstName: "John",
            email: "alice@gmail.com",
        }
    }
    public isAth() {
        return true;
    }
}