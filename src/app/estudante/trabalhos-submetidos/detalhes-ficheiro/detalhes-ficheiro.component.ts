import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-detalhes-ficheiro',
  templateUrl: './detalhes-ficheiro.component.html',
  styleUrls: ['./detalhes-ficheiro.component.scss']
})
export class DetalhesFicheiroComponent implements OnInit {

  constructor() { }
    @Input() avaliacao: any;
    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();

  ngOnInit() {
      this.output.emit(this.modal);

  }

}
