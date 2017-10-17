import { Component, OnInit } from '@angular/core';
import {TrabalhoService} from "../../service/trabalho.service";

@Component({
  selector: 'app-lista-de-trabalhos',
  templateUrl: './lista-de-trabalhos.component.html',
  styleUrls: ['./lista-de-trabalhos.component.scss']
})
export class ListaDeTrabalhosComponent implements OnInit {
  testes:any = [1,2,3,4,5,6];
  trabalhos : any;

  constructor(private _trabalhoService: TrabalhoService) { }

  ngOnInit() {
    this.getTrabalhos();
  }

  getTrabalhos(){
    this._trabalhoService.getTrabalho(true,6).subscribe(
        resultado => {
          this.trabalhos = resultado['trabalhos'].data;
          console.log(resultado)
        },
        error2 => {console.log("Error")},
        () =>{
          console.log("Sucesso");
        }
    );
  }

}
