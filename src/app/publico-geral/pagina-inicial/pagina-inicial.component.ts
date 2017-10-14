import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  opcoesAreas: any = [
    {
      'value':'todas',
      'option':'TODAS AREAS'
    }
  ];

  opcoesCursos: any = [
    {
      'value':'TODOS-CURSOS',
      'option':'TODOS CURSOS'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
