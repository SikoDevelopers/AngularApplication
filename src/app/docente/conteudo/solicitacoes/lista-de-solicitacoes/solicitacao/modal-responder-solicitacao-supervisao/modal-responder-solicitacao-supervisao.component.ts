import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal-responder-solicitacao-supervisao',
  templateUrl: './modal-responder-solicitacao-supervisao.component.html',
  styleUrls: ['./modal-responder-solicitacao-supervisao.component.scss']
})
export class ModalResponderSolicitacaoSupervisaoComponent implements OnInit {
  @ViewChild('modal') modal;
  @Output() output = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.output.emit(this.modal);
  }

}
