import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {
  rota: string;
  constructor(private _route:Router) { }

  ngOnInit() {
    this.rota = this._route.url;
  }

}
