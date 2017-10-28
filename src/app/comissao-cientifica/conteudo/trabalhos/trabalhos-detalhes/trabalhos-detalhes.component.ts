import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-trabalhos-detalhes',
  templateUrl: './trabalhos-detalhes.component.html',
  styleUrls: ['./trabalhos-detalhes.component.scss']
})
export class TrabalhosDetalhesComponent implements OnInit {

    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
    @Input() trabalho: any;
    @Input() docentes: any;
    @Input() modalParticipantes: any;
    @Input() docentesdicionados = [];

  constructor() {

  }

  ngOnInit() {
    this.output.emit(this.modal);
  }




    getEstado(is_aprovado){
      if(is_aprovado){
            return "Aprovado";
        }
        else
            return "Nao Aprovado";
    }


    getDataSubmissao(dataSubmissao){
        let data = new Date(dataSubmissao);
        return data.getDay() +" / "+data.getMonth()+ " / "+ data.getFullYear();
    }


    adicionarParticipante(){
        this.modal.hide();
        this.modalParticipantes.show();
    }



    getModalParticipantes(evento){
        this.modalParticipantes = evento;
    }

    reabrirDialog(evento){

        console.log(evento);
        this.docentesdicionados.push(evento);


        this.modalParticipantes.hide();
        this.modal.show();

    }

    salvarAlteracoes(){
        console.log("Devem ser adicionados os seguintes docentes");
        console.log(this.docentesdicionados);
        console.log("Para este trabalho");
        console.log(this.trabalho);

    }



}
