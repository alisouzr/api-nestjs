import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { DataBaseService } from 'src/database/database.service';
import { CreateTypeSongDto } from './dto/typesong.create.dto';
import { UpdateTypeSongDto } from './dto/typesong.update.dto';

@Injectable({})
export class TypeSongService {

    constructor(private db: DataBaseService) { }

    validate(data: CreateTypeSongDto) {
        if (!data.typeSong) {
            throw new BadRequestException("Informe o nome do tipo de música.");
        }

        return data;
    }

    async create(data: CreateTypeSongDto) {
        this.validate(data);

        return this.db.typeSong.create({
            data,
        })

    }

    async list() {
        return this.db.typeSong.findMany();
    }

    async get(id: number) {
        const typesong = await this.db.typeSong.findUnique({
            where: {
                id: this.getId(id),
            }
        });

        if (!typesong) {
            throw new NotFoundException("Tipo de Música não existe.")
        }

        return typesong;
    }

    async update(id: number, data: UpdateTypeSongDto) {
        this.validate(data);

        return this.db.typeSong.update({
            where: {
                id: this.getId(id),
            },
            data,
        });

    }

    async delete(id: number) {
        await this.get(id);

        return this.db.typeSong.delete({
            where: {
                id: this.getId(id),
            }
        });
    }

    getId(id: number) {
        id = Number(id);

        if (isNaN(id)) {
            throw new BadRequestException('ID inválido.');
        }

        return id;
    }
}
