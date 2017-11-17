import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';




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



    constructor() { }

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
        alert("Pegando Avaliador");
        this.adicionar_or_select = true;
        this.avaliador = evento.avaliadorSelecionado;
        console.log(this.avaliador);
    }

    possuiAvaliador() : boolean{
        return this.parecerFinal || !!this.avaliador;
    }


}
