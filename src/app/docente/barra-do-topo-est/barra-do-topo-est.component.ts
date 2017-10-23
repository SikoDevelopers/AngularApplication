import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-do-topo-est',
  templateUrl: './barra-do-topo-est.component.html',
  styleUrls: ['./barra-do-topo-est.component.scss']
})
export class BarraDoTopoEstComponent implements OnInit {
  nomeDaApp: String = "SikoSSP";
  constructor() { }

  ngOnInit() {
  }



    terminarSessao(){
        localStorage.setItem('isLoggedin', 'false');
        localStorage.removeItem('token');
        window.location.href = "login";
    }


}
