import { Component, OnInit } from '@angular/core';
import {TemaService} from "../../../service/tema.service";

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {
  temas : any;
  constructor(private _temaSevice: TemaService) { }

  ngOnInit() {
    this.getTemas();
  }

  getTemas(){
    this._temaSevice.getTema().subscribe(
        resultado => { this.temas = resultado['tema']},
        error2 => {console.log("Error ao carregar "+error2)},
        () =>{
          console.log("Sucesso ao Carregar Temas");
        }
    );
  }

}
