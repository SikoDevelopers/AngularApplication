import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-submeter-tema',
  templateUrl: './submeter-tema.component.html',
  styleUrls: ['./submeter-tema.component.scss']
})
export class SubmeterTemaComponent implements OnInit {

  @ViewChild('modal') modal;
  @Output() output = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.output.emit(this.modal);
  }

}
