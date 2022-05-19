import { Injectable, NotFoundException } from "@nestjs/common";
import { DataBaseService } from "src/database/database.service";

@Injectable()
export class SingerService {

    constructor(private db: DataBaseService) { }

    listSinger() {
        return this.db.singer.findMany();
    }

    async getById(id: number) {

        id = Number(id);

        const singer = await this.db.singer.findUnique({
            where: {
                id,
            }
        });

        if (!singer) {
            throw new NotFoundException("Cantor não encontrado.")
        }

        return singer;
    }
}