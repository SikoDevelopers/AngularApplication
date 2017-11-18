import { Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';
import {TrabalhoService} from "../../../../../../service/trabalho.service";

@Component({
  selector: 'app-modal-responder-solicitacao-supervisao',
  templateUrl: './modal-responder-solicitacao-supervisao.component.html',
  styleUrls: ['./modal-responder-solicitacao-supervisao.component.scss']
})
export class ModalResponderSolicitacaoSupervisaoComponent implements OnInit {
  @ViewChild('modal') modal;
  @Output() output = new EventEmitter();
  @Input() solicitacao:any;

 // sol = solicitacao;

  constructor(private _trabalhoService:TrabalhoService) { }

  ngOnInit() {
    this.output.emit(this.modal);
    //this.getAreaEFicheiroDoTrabalho(solicitacao)
  }



}
