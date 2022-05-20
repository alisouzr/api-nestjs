import { Module } from '@nestjs/common';
import { DataBaseModule } from 'src/database/database.module';
import { TypeSongModule } from 'src/typeSong/typesong.module';
import { SingerController } from './singer.controller';
import { SingerService } from './singer.service';

@Module({
  controllers: [SingerController],
  imports: [DataBaseModule, TypeSongModule],
  providers: [SingerService]
})
export class SingerModule { }
