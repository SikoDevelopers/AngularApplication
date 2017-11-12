import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent implements OnInit {
  cor: string = 'white';

  constructor() { }

  ngOnInit() {
  }


  changeStyle($event){
    this.cor = $event.type == 'mouseover' ? '#eeeeee' : 'white';
  }

}
