import { IsNotEmpty, IsString, Matches, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    nickname: string;

    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    idade: number;

    @IsNotEmpty()
    favoriteSongId: number;

    @IsNotEmpty()
    favoriteTypeSongId: number;

    @IsNotEmpty()
    @MinLength(8)
    @Matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%])/, {
        message: 'A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais'
    })
    password: string;

}