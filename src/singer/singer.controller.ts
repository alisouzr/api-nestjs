import { Controller, Get, Param } from "@nestjs/common";
import { SingerService } from "./singer.service";

@Controller('singer')
export class SingerController {
    constructor(private singerService: SingerService) { }


    //retornar todos os cantores
    @Get()
    list() {
        return this.singerService.listSinger();
    }

    //retornar cantores especificos
    @Get(":id")
    getSinger(@Param('id') id: number) {
        return this.singerService.getById(id);
    }
}