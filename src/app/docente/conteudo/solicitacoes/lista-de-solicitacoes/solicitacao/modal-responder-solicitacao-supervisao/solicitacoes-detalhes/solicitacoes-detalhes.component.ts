import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solicitacoes-detalhes',
  templateUrl: './solicitacoes-detalhes.component.html',
  styleUrls: ['./solicitacoes-detalhes.component.scss']
})
export class SolicitacoesDetalhesComponent implements OnInit {
  @Input() solicitaco:any;

  constructor() { }

  ngOnInit() {
  }

}
