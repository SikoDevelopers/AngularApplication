import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-trabalhos-detalhes',
  templateUrl: './trabalhos-detalhes.component.html',
  styleUrls: ['./trabalhos-detalhes.component.scss']
})
export class TrabalhosDetalhesComponent implements OnInit {

    @ViewChild('modal') modal;
    @Output('output') output = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }



}
