import { Controller } from "@nestjs/common";
import { SingerService } from "./singer.service";

@Controller('singer')
export class SingerController {
    constructor(private singerService: SingerService) { };
}