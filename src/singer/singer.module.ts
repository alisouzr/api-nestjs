import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/database/database.module';
import { TypeSongModule } from 'src/typeSong/typesong.module';
import { SingerController } from './singer.controller';
import { SingerService } from './singer.service';

@Module({
  controllers: [SingerController],
  imports: [JwtModule.registerAsync({
    useFactory: () => ({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
      },
    }),
  }), DataBaseModule, TypeSongModule],
  providers: [SingerService]
})
export class SingerModule { }
