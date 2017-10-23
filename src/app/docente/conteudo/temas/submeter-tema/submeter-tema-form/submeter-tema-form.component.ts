import { Component, OnInit } from '@angular/core';
import {AreaService} from "../../../../../service/area.service";
import {CursoService} from "../../../../../service/curso.service";
import {TemaService} from "../../../../../service/tema.service";
import {NgForm} from "@angular/forms";
import {HttpErrorResponse} from '@angular/common/http';
import {UserService} from "../../../../../service/user.service";
import {DocenteService} from "../../../../../service/docente.service";


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
  user: any;
  docente: any;
  constructor(private _areaService: AreaService,
              private _temaServie: TemaService,
              private _userService: UserService,
              private _docenteService: DocenteService
  ) { }

  ngOnInit() {
    this.getAreas();
    this.getUser();
    // console.log("THE USER"+this.user.id);
  }

  getAreas(){
    this._areaService.getArea().subscribe(
        resultado => { this.areas = resultado['areas']},
        error2 => {console.log("Error ao carregar Areas "+error2)},
        () =>{
          console.log("Sucesso ao Carregar Areas");
        }
    );
  }

  // getCursos(){
  //   this._cursoService.getCurso().subscribe(
  //       resultado => { this.cursos = resultado['cursos']},
  //       error2 => {console.log("Error ao carregar "+error2)},
  //       () =>{
  //         console.log("Sucesso ao Carregar Cursos");
  //       }
  //   );
  // }



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
            console.error("Ocorreu um erro: "+erro);
        },
        ()=>{
            console.log("We did it");
        }
    );
  }

  getTema(formulario: NgForm){
    this.getUser();
    this.getDocente(this.user.id);
    let tema: any = {
      'designacao' : formulario.value.titulo,
      'docentes_id': this.docente.id,
      'areas_id': this.area_id
    };
    return tema;
  }

  getUser(){
    let token = localStorage.getItem('token');

    this._userService.logoado(token).subscribe(
        resultado=>{this.user = resultado;},
        error2 => {},
        ()=>{
          console.log('user retrivied ');
          this.gravarTema();
        }
    );


  }

  gravarTema(){}

  getDocente(id){
      this._docenteService.getDocentePorId(id).subscribe(
          resultado => {this.docente = resultado},
          error2 => {console.log('Ocorreu um erro: '+error2)},
          () => {}
      );
  }
}
