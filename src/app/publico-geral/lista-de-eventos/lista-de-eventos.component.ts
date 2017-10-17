import { Component, OnInit } from '@angular/core';
import {EventoService} from "../../service/evento.service";

@Component({
  selector: 'app-lista-de-eventos',
  templateUrl: './lista-de-eventos.component.html',
  styleUrls: ['./lista-de-eventos.component.scss']
})
export class ListaDeEventosComponent implements OnInit {
  testes:any = [1,2,3,4,5,6];
  eventos:any;
  constructor(private _eventosService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }
  getEventos(){
    this._eventosService.getEvento().subscribe(
      resultado => { this.eventos = resultado['eventos'];},
      error2 => {console.log("Error")},
          () =>{
            console.log("Sucesso ao Carregar eventos");
          }
    );
  }
}
