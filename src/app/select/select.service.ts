import { Injectable } from '@angular/core';

@Injectable()
export class SelectService {

  constructor() { }


  getOpcoes() {
    return [
      {
        'value' : 'Valor 1',
        'option': 'Opcao 1'
      },
      {
        'value' : 'Valor 2',
        'option': 'Opcao 2'
      },
      {
        'value' : 'Valor 3',
        'option': 'Opcao 3'
      },
      {
        'value' : 'Valor 4',
        'option': 'Opcao 4'
      },
      {
        'value' : 'Valor 5',
        'option': 'Opcao 5'
      },
    ];
  }

}
