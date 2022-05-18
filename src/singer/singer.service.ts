import { Injectable } from "@nestjs/common";

@Injectable({})
export class SingerService {
    constructor(private db: DataBaseService) { }
}