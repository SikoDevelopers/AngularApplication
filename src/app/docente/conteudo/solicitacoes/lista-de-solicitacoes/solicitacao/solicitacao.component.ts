import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.scss']
})
export class SolicitacaoComponent implements OnInit {
  cor: string = 'white';
  @Input() modal: any;
  constructor() { }

  ngOnInit() {
  }


  changeStyle($event){
    this.cor = $event.type == 'mouseover' ? '#eeeeee' : 'white';
  }

  getModal(evento) {
    this.modal = evento;
  }

  onMostrarModal(){
    this.modal.show();
  }

}
