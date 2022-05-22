import { Controller, Delete, Get, Param, Post, Put, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { SingerService } from './singer.service';

@Controller('singer')
export class SingerController {
    constructor(private singerService: SingerService) { }

    @UseGuards(AuthGuard)
    @Get()
    async read() {
        return this.singerService.list();
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    async show(@Param("id") id: number) {
        return this.singerService.get(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() body: CreateSingerDto) {
        return this.singerService.create(body);
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    update(@Param("id") id: number, @Body() body: UpdateSingerDto) {
        return this.singerService.update(id, body);
    }

    @UseGuards(AuthGuard)
    @Delete(":id")
    delete(@Param("id") id: number) {
        return this.singerService.delete(id);
    }

}
