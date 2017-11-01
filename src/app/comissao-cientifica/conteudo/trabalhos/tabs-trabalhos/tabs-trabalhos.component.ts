import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-trabalhos',
  templateUrl: './tabs-trabalhos.component.html',
  styleUrls: ['./tabs-trabalhos.component.scss']
})
export class TabsTrabalhosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    receberDados(evento){
      this.entradaDados = evento;
    }

    getModal(evento){
        this.modal = evento;
        // console.log(evento);
    }
}
