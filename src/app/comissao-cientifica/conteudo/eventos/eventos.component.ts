import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

    @Input() modalCriarEvento: any;


    constructor() { }

    ngOnInit() {
    }


    getModal(evento){
        console.log(evento);
        this.modalCriarEvento = evento;
    }






}
