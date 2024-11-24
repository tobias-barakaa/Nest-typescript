import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService) {}
    public login(email:string, password: string, id: string) {
        const user = this.usersService.findOneById('123')
        // check user exists database
        // login user
        // token
        return 'SAMPLE_TOKEN';
    }

    public isAth() {
        return true;
    }

}
