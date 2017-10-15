import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-de-eventos',
  templateUrl: './lista-de-eventos.component.html',
  styleUrls: ['./lista-de-eventos.component.scss']
})
export class ListaDeEventosComponent implements OnInit {
  testes:any = [1,2,3,4,5,6];
  constructor() { }

  ngOnInit() {
  }

}
