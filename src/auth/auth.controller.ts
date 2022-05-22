import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {

    constructor(private userService: UserService, private authService: AuthService) { }

    @Post('register')
    async create(@Body() body: CreateUserDto) {
        return this.userService.create(body);
    }

    @Post('login')
    async login(@Body() body: LoginDto) {
        return this.authService.login(body);
    }
}
