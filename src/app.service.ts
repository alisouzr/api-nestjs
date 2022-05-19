import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1 style="display: flex; justify-content:center; color: pink">Início do Banco de Dados<h1>';
  }
}
