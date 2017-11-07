import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tabs-trabalhos',
  templateUrl: './tabs-trabalhos.component.html',
  styleUrls: ['./tabs-trabalhos.component.scss']
})
export class TabsTrabalhosComponent implements OnInit {



    @Input() modalProtocolo: any;
    @Input() modalTrabalho: any;
    @Input() modalTodos: any;

    /**
     * recebe os dados retirados de cada uma das tabelas tabs
     */
    @Input() entradaDados: any;


  constructor() { }

  ngOnInit() {
  }

    receberDados(evento){
        this.entradaDados = evento;
    }

    getModalProtocolo(evento){
         this.modalProtocolo = evento;
         console.log(evento);
    }

    getModalTrabalho(evento){
        this.modalProtocolo = evento;
        console.log(evento);
    }

    getModalTodos(evento){
        this.modalProtocolo = evento;
        console.log(evento);
    }

}
