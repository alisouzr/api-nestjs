import {
    Controller,
    Param,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Body,
} from '@nestjs/common';
import { CreateTypeSongDto } from './dto/typesong.create.dto';
import { UpdateTypeSongDto } from './dto/typesong.update.dto';
import { TypeSongService } from './typesong.service';

@Controller('typesong')
export class TypeSongController {
    constructor(private typeSongService: TypeSongService) { }

    @Post()
    create(@Body() typesong: CreateTypeSongDto) {
        return this.typeSongService.create(typesong);
    }

    @Get()
    read() {
        return this.typeSongService.list();
    }

    @Get(':id')
    show(@Param('id') id) {
        return this.typeSongService.get(id);
    }

    @Put(':id')
    update(@Param('id') id, @Body() typesong: UpdateTypeSongDto) {
        return this.typeSongService.update(id, typesong);
    }

    @Patch(':id')
    patch(@Param('id') id, @Body() typesong: UpdateTypeSongDto) {
        return this.typeSongService.update(id, typesong);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return this.typeSongService.delete(id);
    }
}
