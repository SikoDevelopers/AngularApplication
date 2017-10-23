import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-select-supervisor',
  templateUrl: './select-supervisor.component.html',
  styleUrls: ['./select-supervisor.component.scss']
})
export class SelectSupervisorComponent implements OnInit {

    @Input() label: string ;
    @Input() opcoes: any;


    @Output() eventEmmiter = new EventEmitter();

    constructor() { }


    ngOnInit() {

    }

    selecionarSupervisor(evento){
        this.eventEmmiter.emit({supervisor_id: evento.value})
    }


}
