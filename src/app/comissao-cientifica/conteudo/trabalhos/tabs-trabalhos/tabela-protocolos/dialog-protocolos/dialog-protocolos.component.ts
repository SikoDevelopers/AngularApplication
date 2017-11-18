import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FicheirosService} from '../../../../../../service/ficheiros.service';


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
    @Input() parecerFinal: boolean = true;
    @Input() adicionar_or_select: boolean = true;



    constructor(private ficheiroService: FicheirosService) { }

    ngOnInit() {
        this.output.emit(this.modal);
        // $(this.modal.nativeElement).modal('show');
    }



    getAvaliadorAux(){
        return this.avaliador;
    }



    mostrarSelect(){
        this.adicionar_or_select = !this.adicionar_or_select;
    }


    getAvaliador(evento){
        this.parecerFinal = evento.parecerFinal;
        this.adicionar_or_select = true;
        this.avaliador = evento.avaliadorSelecionado;
        console.log(this.avaliador);
    }

    possuiAvaliador() : boolean{
        return this.parecerFinal && !!this.avaliador;
    }


    abrirFicheiro(evento, caminho: String){
        this.ficheiroService.abrirFicheiro(caminho);
    }


}
