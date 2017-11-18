import {Component, Input, OnInit} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

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
    protocoloSelecionado: any;
    docentes: any;
    avaliadorSelecionado: any;
    parecerFinal: boolean;



  constructor() { }

  ngOnInit() {
  }


    receberDados(evento) {
        this.trabalhoSelecionado = evento.trabalhoSelecionado;
        this.docentes = evento.docentes;
    }


    receberDadosProtocolo(evento){
        this.protocoloSelecionado = evento.protocoloSelecionado;
        this.avaliadorSelecionado = evento.avaliadorSelecionado;
        this.parecerFinal = evento.parecerFinal;
    }


    getModalProtocolo(evento){
         this.modalProtocolo = evento;
         this.getModalTrabalho(evento);
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
