import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DataBaseModule } from 'src/database/database.module';
import { TypeSongController } from './typesong.controller';
import { TypeSongService } from './typesong.service';

@Module({
    controllers: [TypeSongController],
    imports: [JwtModule.registerAsync({
        useFactory: () => ({
            secret: process.env.JWT_SECRET,
            signOptions: {
                expiresIn: `${process.env.JWT_EXPIRES_IN}s`,
            },
        }),
    }), DataBaseModule],
    exports: [TypeSongService],
    providers: [TypeSongService],
})
export class TypeSongModule { }
