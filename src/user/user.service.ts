import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from "bcrypt";
import { TypeSongService } from 'src/typeSong/typesong.service';

@Injectable()
export class UserService {

    constructor(private db: DataBaseService) { }

    async getByName(name: string) {
        const user = await this.db.user.findFirst({
            where: {
                name,
            },
        })

        return user;
    }

    async list() {
        return this.db.user.findMany();
    }

    async get(id: number) {
        const user = await this.db.user.findUnique({
            where: {
                id: this.invalidId(id),
            }
        });

        if (!user) {
            throw new NotFoundException("Usuário não existe.")
        }

        return user;
    }

    async create({ name, nickname, phone, city, idade, favoriteSongId, favoriteTypeSongId, password }: CreateUserDto) {

        const favoriteSong = await this.db.musica.findUnique({
            where: {
                id: Number(favoriteSongId),
            },
        });

        const favoriteTypeSong = await this.db.typeSong.findUnique({
            where: {
                id: Number(favoriteTypeSongId),
            }
        })

        if (!favoriteSong) {
            throw new NotFoundException("Música não encontrada.");
        }

        if (!favoriteTypeSong) {
            throw new NotFoundException("Tipo de música não encontrada.");
        }

        const salt = bcrypt.genSaltSync(10);


        return this.db.user.create({
            data: {
                name,
                nickname,
                phone,
                city,
                idade: Number(idade),
                musica: {
                    connect: {
                        id: Number(favoriteSongId),
                    }
                },
                typesong: {
                    connect: {
                        id: Number(favoriteTypeSongId)
                    }
                },
                password: bcrypt.hashSync(password, salt),

            }
        })
    }

    async update(id: number, data: UpdateUserDto) {

        const favoriteSong = await this.db.musica.findUnique({
            where: {
                id: Number(data.favoriteSongId),
            },
        });

        const favoriteTypeSong = await this.db.typeSong.findUnique({
            where: {
                id: Number(data.favoriteTypeSongId),
            }
        })

        if (!favoriteSong) {
            throw new NotFoundException("Música não encontrada.");
        }

        if (!favoriteTypeSong) {
            throw new NotFoundException("Tipo de música não encontrada.");
        }

        return this.db.user.update({
            where: {
                id: this.invalidId(id),
            },
            data,
        })
    }

    async delete(id: number) {
        await this.get(id);

        return this.db.user.delete({
            where: {
                id: this.invalidId(id),
            }
        });
    }

    invalidId(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        return id;
    }


}
