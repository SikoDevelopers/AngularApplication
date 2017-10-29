import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {
  @Input() tema: any;
  @Input() nome: any;

  @Input() modal: any;
  constructor() { }

  ngOnInit() {
  }

  getData(){
    // let dataSeparada = tema.spp
  }

  getModal(evento){
    this.modal = evento;
  }
  onMostrarModal(){
    this.modal.show();
  }
}
