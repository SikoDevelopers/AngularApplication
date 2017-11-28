import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-solicitacao-avaliacao',
  templateUrl: './solicitacao-avaliacao.component.html',
  styleUrls: ['./solicitacao-avaliacao.component.scss']
})
export class SolicitacaoAvaliacaoComponent implements OnInit {
  @Input() solicitacao: any;
  cor: string = 'white';
  constructor() { }

  ngOnInit() {
  }

  changeStyle($event){
    this.cor = $event.type == 'mouseover' ? '#eeeeee' : 'white';
  }

  onSolicitacaoClick(solicitacao){
    alert("click");
    localStorage.setItem('solicitacao',solicitacao);
  }
}
