import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.scss']
})
export class DocentesComponent implements OnInit {

  @Input() modalAdicionarDocente: any;
  constructor() { }

  ngOnInit() {
  }



  getModal(evento){
    console.log(evento);
    this.modalAdicionarDocente = evento;
  }

    chamarModal(){
      this.modalAdicionarDocente.show();
    }

}
