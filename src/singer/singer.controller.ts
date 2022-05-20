import { Controller, Delete, Get, Param, Post, Put, Body } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { SingerService } from './singer.service';

@Controller('singer')
export class SingerController {
    constructor(private singerService: SingerService) { }

    @Get()
    async read() {
        return this.singerService.list();
    }

    @Get(":id")
    async show(@Param("id") id: number) {
        return this.singerService.get(id);
    }

    @Post()
    async create(@Body() body: CreateSingerDto) {
        return this.singerService.create(body);
    }

    @Put(":id")
    update(@Param("id") id: number, @Body() body: UpdateSingerDto) {
        return this.singerService.update(id, body);
    }

    @Delete(":id")
    delete(@Param("id") id: number) {
        return this.singerService.delete(id);
    }

}
