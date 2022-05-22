import {
    Controller,
    Param,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Body,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTypeSongDto } from './dto/typesong.create.dto';
import { UpdateTypeSongDto } from './dto/typesong.update.dto';
import { TypeSongService } from './typesong.service';

@Controller('typesong')
export class TypeSongController {
    constructor(private typeSongService: TypeSongService) { }

    @UseGuards(AuthGuard)
    @Post()
    create(@Body() typesong: CreateTypeSongDto) {
        return this.typeSongService.create(typesong);
    }

    @UseGuards(AuthGuard)
    @Get()
    read() {
        return this.typeSongService.list();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    show(@Param('id') id) {
        return this.typeSongService.get(id);
    }

    @UseGuards(AuthGuard)
    @Put(':id')
    update(@Param('id') id: number, @Body() typesong: UpdateTypeSongDto) {
        return this.typeSongService.update(id, typesong);
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    patch(@Param('id') id, @Body() typesong: UpdateTypeSongDto) {
        return this.typeSongService.update(id, typesong);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    delete(@Param('id') id) {
        return this.typeSongService.delete(id);
    }
}
