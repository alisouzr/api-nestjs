import { Module } from "@nestjs/common";
import { DataBaseModule } from "src/database/database.module";
import { SingerController } from "./singer.controller";
import { SingerService } from "./singer.service";

@Module({
    controllers: [SingerController],
    imports: [DataBaseModule],
    exports: [SingerService],
    providers: [SingerService],
})
export class SingerModule { }