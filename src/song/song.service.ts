import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongService {

    constructor(private db: DataBaseService) { }

    async list() {
        return this.db.musica.findMany();
    }

    async listarsongs(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        const song = await this.db.musica.findUnique({
            where: {
                id,
            }
        });

        if (!song) {
            throw new NotFoundException("Música não existe.")
        }

        return song;
    }

    async create({ name, singerId, album, gravadora, lancamento }: CreateSongDto) {
        return this.db.musica.create({
            data: {
                name,
                singer: {
                    connect: {
                        id: Number(singerId),
                    }
                },
                album,
                gravadora,
                lancamento: new Date(lancamento)
            }
        });
    }

    async update(id: number, { name, singerId, album, gravadora, lancamento }: UpdateSongDto) {

        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        const updatesong = await this.db.musica.update({
            where: {
                id,
            },
            data: {
                name,
                singer: {
                    connect: {
                        id: Number(singerId),
                    }
                },
                album,
                gravadora,
                lancamento: new Date(lancamento)
            }
        });

        if (!updatesong) {
            throw new NotFoundException("Música não existe.")
        }

        return updatesong;
    }

    async delete(id: number) {

        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        const songdelete = await this.db.musica.delete({
            where: {
                id,
            }
        });

        if (!songdelete) {
            throw new NotFoundException("Música não existe.")
        }

        return songdelete;


    }

}
