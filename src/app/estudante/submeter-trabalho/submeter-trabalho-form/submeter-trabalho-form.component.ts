import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../service/area.service";
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-submeter-trabalho-form',
  templateUrl: './submeter-trabalho-form.component.html',
  styleUrls: ['./submeter-trabalho-form.component.scss']
})
export class SubmeterTrabalhoFormComponent implements OnInit {
  label: string = "Seleccione a area tematica";
  labelDoFileChooser = "Seleccionar Documento";
  areas: any = [{'id':1,'designacao':'TESTE'}];
  constructor(private  _areaService: AreaService) {

  }

  ngOnInit() {
    this.getAreas();
  }




  getAreas(){
    let area : any;
    return this._areaService.getArea().subscribe(

        function (resultado: Response) {
          area = resultado['areas'];
        },

        function (erros: HttpErrorResponse){
          console.log(erros);
        },
        function () {
          this.areas = area;
          console.log(this.areas);
        }
    );
  }
}
