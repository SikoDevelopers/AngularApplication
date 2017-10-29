import {Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter} from '@angular/core';
import {SelectService} from "./select.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string ;
  @Input() opcoes: any;
  @Input() idArea: number;




  @Output() eventEmmiter = new EventEmitter();

  constructor() { }


  ngOnInit() {

  }

    selecionarCurso(evento){
      this.eventEmmiter.emit({area_id: evento.value})
    }



}
