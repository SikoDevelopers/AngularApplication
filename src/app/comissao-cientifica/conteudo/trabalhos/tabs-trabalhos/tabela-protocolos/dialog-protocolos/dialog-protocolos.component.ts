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


    constructor() { }

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

}
