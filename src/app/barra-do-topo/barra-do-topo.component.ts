import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barra-do-topo',
  templateUrl: './barra-do-topo.component.html',
  styleUrls: ['./barra-do-topo.component.css']
})
export class BarraDoTopoComponent implements OnInit {
  nomeDaApp : string = "CC-DMI";
  rota: string;

  @Input() user: any;

  constructor(private _route: Router) { }


  ngOnInit() {
    this.rota = this._route.url;
  }



    redirecionarUser(user, evento){

        if(user.estudante){
            window.location.href = 'estudante/submeter-trabalho';
        }
        if(user.docente){
            window.location.href = 'docente/supervisandos';
        }
        if(user.tipo_user){
            if(user.tipo_user.designacao == 'Comissao Cientifica')
            window.location.href = 'comissao-cientifica/over-view';
        }
        if(user.funcionario){
            window.location.href = 'comissao-cientifica/over-view';
        }
    }





}
