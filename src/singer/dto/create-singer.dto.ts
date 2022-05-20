import { IsNotEmpty } from "class-validator";

export class CreateSingerDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    firstAlbum: string;

    @IsNotEmpty()
    famousSong: string;

    @IsNotEmpty()
    typeSongID: number;
}