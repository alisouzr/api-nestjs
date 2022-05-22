import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService,) { }

    async login({ name, password }: LoginDto) {
        const user = await this.userService.getByName(name);

        if (!user) {
            throw new BadRequestException("Usuário ou senha inválido.");
        }

        const passwordIsCorrect = await bcrypt.compare(password, user.password);

        if (!passwordIsCorrect) {
            throw new BadRequestException("Usuário ou senha inválido.");
        }

        const acessToken = this.jwtService.sign({
            id: user.id,
            name: user.name,
        });
        delete user.password;

        return {
            user,
            acessToken,
        };

    }


}
