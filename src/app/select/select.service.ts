import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {
  opcoes : any;
  constructor() {

  }

  setOpcoes(opc){
    this.opcoes = opc;
  }

  getOpcoes() {
    return this.opcoes;
  }



}
