import {Component, OnInit, ViewChild, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-submeter-trabalho-final',
  templateUrl: './submeter-trabalho-final.component.html',
  styleUrls: ['./submeter-trabalho-final.component.scss']
})
export class SubmeterTrabalhoFinalComponent implements OnInit {
  @ViewChild('modal') modal;
  @Output() output = new EventEmitter();
  @Input() estado;
  constructor() {

  }

  ngOnInit() {
    this.output.emit(this.modal);
  }

}
