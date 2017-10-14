import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-barra-do-topo',
  templateUrl: './barra-do-topo.component.html',
  styleUrls: ['./barra-do-topo.component.css']
})
export class BarraDoTopoComponent implements OnInit {
  nomeDaApp : string = "SikoSSP"
  rota: string;

  @Input() user: any;

  constructor(private _route: Router) { }


  ngOnInit() {
    this.rota = this._route.url;
  }
}
