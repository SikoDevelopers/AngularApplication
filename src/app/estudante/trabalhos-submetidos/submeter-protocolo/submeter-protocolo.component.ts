import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-submeter-protocolo',
  templateUrl: './submeter-protocolo.component.html',
  styleUrls: ['./submeter-protocolo.component.scss']
})
export class SubmeterProtocoloComponent implements OnInit {
    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
  constructor() { }

  ngOnInit() {
      this.output.emit(this.modal);
  }

}
