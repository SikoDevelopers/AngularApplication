import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-dialog-protocolos',
  templateUrl: './dialog-protocolos.component.html',
  styleUrls: ['./dialog-protocolos.component.scss']
})
export class DialogProtocolosComponent implements OnInit {

    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
    @Input() trabalho: any;
    @Input() avaliador: any;
    parecerFinal: boolean = false;
    adicionar_or_select: boolean = true;
    is_permanente_temporario: boolean = false;


    constructor() { }

    ngOnInit() {
        this.output.emit(this.modal);
    }




    getAvaliadorAux(){
        return this.avaliador;
    }



    mostrarSelect(){
        this.adicionar_or_select = !this.adicionar_or_select;
    }

    getAvaliador(evento){
        this.parecerFinal = evento.isAdicionado;
        this.is_permanente_temporario = true;
        this.avaliador = evento.avaliadorSelecionado;
        console.log(this.avaliador);
    }

    possuiAvaliador() : boolean{
        return this.parecerFinal || this.trabalho.avaliacoes_id != 0;
    }


}
