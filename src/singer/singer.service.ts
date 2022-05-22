import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { TypeSongService } from 'src/typeSong/typesong.service';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';

@Injectable()
export class SingerService {

    constructor(private db: DataBaseService, private typeSongService: TypeSongService) { }

    async list() {
        return this.db.singer.findMany();
    }

    async get(id: number) {
        const singer = await this.db.singer.findUnique({
            where: {
                id: this.getId(id),
            }
        });

        if (!singer) {
            throw new NotFoundException("Cantor não existe.")
        }

        return singer;
    }

    async create({ name, firstAlbum, famousSong, typeSongID }: CreateSingerDto) {

        await this.typeSongService.getById(typeSongID);

        return this.db.singer.create({
            data: {
                name,
                firstAlbum,
                famousSong,
                typesong: {
                    connect: {
                        id: Number(typeSongID),
                    }
                }
            }
        })
    }

    async update(id: number, { name, firstAlbum, famousSong, typeSongID }: UpdateSingerDto) {

        await this.typeSongService.getById(typeSongID);

        return this.db.singer.update({
            where: {
                id: this.getId(id),
            },
            data: {
                name,
                firstAlbum,
                famousSong,
                typesong: {
                    connect: {
                        id: Number(typeSongID),
                    }
                }
            }
        })

    }

    async delete(id: number) {

        await this.get(id);

        return this.db.singer.delete({
            where: {
                id: this.getId(id),
            }
        })
    }

    getId(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        return id;
    }

}