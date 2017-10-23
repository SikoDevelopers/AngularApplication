import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../../service/area.service";
import {CursoService} from "../../../../../service/curso.service";
import {TemaService} from "../../../../../service/tema.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-submeter-tema-form',
  templateUrl: './submeter-tema-form.component.html',
  styleUrls: ['./submeter-tema-form.component.scss']
})
export class SubmeterTemaFormComponent implements OnInit {
  labelArea: string = "Seleccione a Area de estudo ";

  labelCurso: string = "Seleccione o Curso ";
  curso_id: any;
  area_id: any;
  cursos : any;
  areas: any;

  constructor(private _areaService: AreaService, private _cursoService: CursoService, private _temaServie: TemaService) { }

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

  getCursoSelect(event){
    this.curso_id = event.curso_id;
  }

  getAreaSelect(event){
    this.area_id = event.area_id;
  }

  onSugerirTema(formulario: NgForm){
    let tema = this.getTema(formulario);

    this._temaServie.saveTema(tema).subscribe(
        (resultado: Response) => {
            alert("Tema Submetido com sucesso");

        },
        (erro: HttpErrorResponse)=> {
            console.error(erro);
        },
        ()=>{
            console.log("We did it");
        }
    );
  }

  getTema(formulario: NgForm){
    const tema: any = {
      'designacao' : formulario.value.titulo,
      'areas_id': this.area_id,
      'docentes_id': 12
    };
    return tema;
  }
}
