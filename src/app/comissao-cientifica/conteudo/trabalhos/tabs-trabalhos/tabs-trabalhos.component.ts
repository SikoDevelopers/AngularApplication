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

    trabalhoSelecionado: any;
    docentes: any;



  constructor() { }

  ngOnInit() {
  }

    receberDados(evento){
      this.trabalhoSelecionado = evento.trabalhoSelecionado;
      this.docentes = evento.docentes;
    }

    getModalProtocolo(evento){
         this.modalProtocolo = evento;
         console.log(evento);
    }

    getModalTrabalho(evento){
        this.modalTrabalho = evento;
        console.log(evento);
    }

    getModalTodos(evento){
        this.modalProtocolo = evento;
        console.log(evento);
    }

}
