import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../../service/area.service";
import {CursoService} from "../../../../../service/curso.service";


@Component({
  selector: 'app-submeter-tema-form',
  templateUrl: './submeter-tema-form.component.html',
  styleUrls: ['./submeter-tema-form.component.scss']
})
export class SubmeterTemaFormComponent implements OnInit {
  labelArea: string = "Seleccione a Area de estudo ";

  labelCurso: string = "Seleccione o Curso ";

  cursos : any;
  areas: any;

  constructor(private _areaService: AreaService, private _cursoService: CursoService) { }

  ngOnInit() {
    this.getAreas();
    this.getCursos();
  }

  getAreas(){
    this._areaService.getArea().subscribe(
        resultado => { this.areas = resultado['areas']},
        error2 => {console.log("Error ao carregar "+error2)},
        () =>{
          console.log("Sucesso ao Carregar Areas");
        }
    );
  }

  getCursos(){
    this._cursoService.getCurso().subscribe(
        resultado => { this.cursos = resultado['cursos']},
        error2 => {console.log("Error ao carregar "+error2)},
        () =>{
          console.log("Sucesso ao Carregar Cursos");
        }
    );
  }


}
