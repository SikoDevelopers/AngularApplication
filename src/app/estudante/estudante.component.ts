import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.scss']
})
export class EstudanteComponent implements OnInit {

  constructor(private _router: Router) { }
    rotas: string;
  ngOnInit() {
    this.rotas="";
    this.rotas=this._router.url;
    alert(this.rotas);
  }



}
