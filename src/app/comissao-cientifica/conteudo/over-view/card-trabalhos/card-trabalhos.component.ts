import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-trabalhos',
  templateUrl: './card-trabalhos.component.html',
  styleUrls: ['./card-trabalhos.component.scss']
})
export class CardTrabalhosComponent implements OnInit {

   @Input() mostrarDetalhes: boolean;

  constructor() { }

  ngOnInit() {
  }

}
