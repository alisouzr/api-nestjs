import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<hr><h1 style="display: flex; justify-content:center; color: pink">Início do Banco de Dados<h1><br><h2 style="display: flex; justify-content:center; color: purple">Pera Music</h2><hr>';
  }
}
