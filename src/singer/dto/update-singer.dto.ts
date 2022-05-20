/* import { PartialType } from "@nestjs/schematics";
import { CreateSingerDto } from "./create-singer.dto";

export class UpdateSingerDto extends PartialType(CreateSingerDto) { } */

export class UpdateSingerDto {
    name: string;
    firstAlbum: string;
    famousSong: string;
    typeSongID: number;

}