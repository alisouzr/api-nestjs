import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SingerModule } from './singer/singer.module';
import { TypeSongModule } from './typeSong/typesong.module';

@Module({
  imports: [SingerModule, TypeSongModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
