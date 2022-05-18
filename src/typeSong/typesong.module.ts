import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { TypeSongController } from './typesong.controller';
import { TypeSongService } from './typesong.service';

@Module({
    controllers: [TypeSongController],
    imports: [DataBaseModule],
    exports: [TypeSongService],
    providers: [TypeSongService],
})
export class TypeSongModule { }
