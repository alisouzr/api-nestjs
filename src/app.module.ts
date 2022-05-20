import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeSongModule } from './typeSong/typesong.module';
import { SongModule } from './song/song.module';
import { SingerModule } from './singer/singer.module';

@Module({
  imports: [TypeSongModule, SongModule, SingerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
