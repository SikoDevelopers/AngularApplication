import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-detalhes-docentes',
  templateUrl: './detalhes-docentes.component.html',
  styleUrls: ['./detalhes-docentes.component.scss']
})
export class DetalhesDocentesComponent implements OnInit {

    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
    @Input() docente: any;

    constructor() {

    }

    ngOnInit() {
        this.output.emit(this.modal);
    }



}
