import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.scss']
})
export class ConteudoComponent implements OnInit {

  rotas: string;
  constructor(private _rotas: Router) {

  }

  ngOnInit() {
    this.rotas = this._rotas.url;
  }

}
