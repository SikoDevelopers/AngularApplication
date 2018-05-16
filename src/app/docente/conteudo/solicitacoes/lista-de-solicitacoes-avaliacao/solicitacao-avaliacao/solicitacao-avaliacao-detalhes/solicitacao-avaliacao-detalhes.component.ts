import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitacao-avaliacao-detalhes',
  templateUrl: './solicitacao-avaliacao-detalhes.component.html',
  styleUrls: ['./solicitacao-avaliacao-detalhes.component.scss']
})
export class SolicitacaoAvaliacaoDetalhesComponent implements OnInit {
  trabalhoPorAvaliar: any;
  constructor() { }

  ngOnInit() {
    this.getTrabalhoPorAvaliar();
  }

  getTrabalhoPorAvaliar(){
    this.trabalhoPorAvaliar = localStorage.getItem('solicitacao');
    console.log(this.trabalhoPorAvaliar);
  }


}
