import { Component, OnInit,Input } from '@angular/core';
import {AreaService} from "../../../../../service/area.service";
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
  @Input() tema:any;
  labelArea: string = "Seleccione a Area de estudo ";

  labelCurso: string = "Seleccione o Curso ";
  curso_id: any;
  area_id: any;
  cursos : any;
  areas: any;
  user: any;
  docente: any;
  constructor(private _areaService: AreaService,
              private _temaService: TemaService,
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
          // console.log("Sucesso ao Carregar Areas");
        }
    );
  }

  getAreaSelect(event){
    this.area_id = event.area_id;
  }

  onSugerirTema(formulario: NgForm){
      this.getUser();
      this.getDocente(this.user.id,formulario);
  }


  getUser(){
    let token = localStorage.getItem('token');

    this._userService.logoado(token).subscribe(
        resultado=>{this.user = resultado},
        error2 => {},
        ()=>{
          console.log('user retrivied ');
          // this.gravarTema();
        }
    );


  }


  getDocente(id, formulario: NgForm){
      this._docenteService.getDocentePorId(id).subscribe(
          resultado => { this.docente = resultado['docente']},
          error2 => {console.log("Error ao carregar Docente "+error2)},
          () =>{
              this.criarTema(formulario);
          }
      );
  }

  criarTema(formulario: NgForm){
      let tema: any = {
          'designacao' : formulario.value.titulo,
          'docentes_id': this.docente.id,
          'areas_id': this.area_id
      };
      this.gravarTema(tema);
  }
  gravarTema(tema){
      this._temaService.saveTema(tema).subscribe(
          (resultado: Response) => {
              alert("Tema Submetido com sucesso");

          },
          (erro: HttpErrorResponse)=> {
              console.error("Ocorreu um erro: "+erro);
          },
          ()=>{

          }
      );
  }

}
