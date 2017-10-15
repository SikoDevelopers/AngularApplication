import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-trabalhos',
  templateUrl: './lista-de-trabalhos.component.html',
  styleUrls: ['./lista-de-trabalhos.component.scss']
})
export class ListaDeTrabalhosComponent implements OnInit {
  testes:any = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
