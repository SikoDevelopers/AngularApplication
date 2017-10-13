import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.scss']
})
export class PaginaComponent implements OnInit {
  rota: string;
  constructor(private _route: Router ) { }

  ngOnInit() {
    this.rota = this._route.url;
  }

}
