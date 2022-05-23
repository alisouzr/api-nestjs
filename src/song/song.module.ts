import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/database/database.module';
import { TypeSongModule } from 'src/typeSong/typesong.module';
import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  controllers: [SongController],
  providers: [SongService],
  imports: [JwtModule.registerAsync({
    useFactory: () => ({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
      },
    }),
  }), DataBaseModule]
})
export class SongModule { }
