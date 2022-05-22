import { Controller, Get, Body, Post, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { SongService } from './song.service';

@Controller('song')
export class SongController {

    constructor(private songService: SongService) { }

    @UseGuards(AuthGuard)
    @Get()
    async list() {
        return this.songService.list();
    }

    @UseGuards(AuthGuard)
    @Get(":id")
    async listarsongs(@Param("id") id: number) {
        return this.songService.listarsongs(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    async create(@Body() song: CreateSongDto) {
        return this.songService.create(song);
    }

    @UseGuards(AuthGuard)
    @Put(":id")
    async update(@Param("id") id: number, @Body() body: UpdateSongDto) {
        return this.songService.update(id, body);
    }

    @UseGuards(AuthGuard)
    @Delete(":id")
    async delete(@Param("id") id: number) {
        return this.songService.delete(id);
    }
}
