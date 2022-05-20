import { IsNotEmpty } from "class-validator";

export class CreateTypeSongDto {
  @IsNotEmpty()
  typeSong: string;
}
