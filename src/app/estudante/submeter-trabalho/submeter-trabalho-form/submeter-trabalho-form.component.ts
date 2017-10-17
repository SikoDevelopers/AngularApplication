import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from "../../../service/area.service";
import {UserService} from "../../../service/user.service";
import {SupervisorExternoService} from "../../../service/supervisor-externo.service";
import {DocenteService} from "../../../service/docente.service";
import {DocenteAreaService} from "../../../service/docente-area.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Data} from "@angular/router";

@Component({
  selector: 'app-submeter-trabalho-form',
  templateUrl: './submeter-trabalho-form.component.html',
  styleUrls: ['./submeter-trabalho-form.component.scss']
})
export class SubmeterTrabalhoFormComponent implements OnInit {
  label: string = "Seleccione a area tematica";
  labelDoFileChooser = "Seleccionar Documento";
  label2: string = "Selecione o supervisor";
  supervisores : any;
  file;
  user : User;
  @Input() supervisor_id: number;
  tipoSuper=1;
    area_id;
  areas: any = [];
  docenteArea;
    titulo;
    descricao;

  constructor(
      private _areas:AreaService,
      private userService:UserService,
      private supervisorService: SupervisorExternoService,
      private docenteService: DocenteService,
      private areaService : AreaService,
      private docenteAreaService : DocenteAreaService
  ) { }

  ngOnInit() {

    this.getUser();
    this.getSupervisores();
      this.getArea();


  }

    setAreaId(evento){
      this.area_id = evento.area_id;
    }
  getUser(){
      const token = localStorage.getItem('token');


      this.userService.logoado(token).subscribe(
          resultado=>{
              this.user = resultado;
          },
          error2 => {

          },
          ()=>{
              alert("user "+this.user.id);
            console.log('user retrivied');
          }
      );
  }

getSupervisores(){

      this.supervisores =[];

      if(this.tipoSuper==1){
          this.docenteService.getDocente().subscribe(
              resultado=>{
                  this.supervisores = resultado['docentes'];
              },
              error2 => {

              },
              ()=>{
                  this.getDocenteArea();
                  console.log('Supervisores carregados');

              }
          )
      };
      if(this.tipoSuper==2){
          this.supervisorService.getSupervisorExterno().subscribe(
              resultado=>{
                  this.supervisores = resultado['supervisorExternos'];
              },
              error2 => {

              },
              ()=>{
                  console.log('Supervisores carregados');

              }
          )
      }




}
getArea(){
    this.areaService.getArea().subscribe(
        resultados => {
            this.areas = resultados['areas'];
        }
    )
}

submeter(){
alert("entramos");
    const dadosTrabalho ={
        'user':this.user.id,
        'protocolo':this.file,
        'tipoSup':this.tipoSuper,
        'supervisor':this.supervisor_id,
        'area':this.area_id,
        'titulo':this.titulo,
        'descricao':this.descricao,
        'data':new Date(),
        'timestamp':new Date().getUTCMilliseconds()

    };


}

    atribuirValor(evento){

      this.file = evento.file;
    }


    atribuirSupervisor(evento){
this.supervisor_id = null;
        if(this.tipoSuper==1){
            this.supervisor_id = evento.supervisor_id;
        }
        if(this.tipoSuper==2){

            this.supervisor_id = evento.supervisor_id;
        }


        this.getDocenteArea();
    }


    setTipoSup(tipo){

        this.tipoSuper=tipo;
        this.getSupervisores();
    }


    getDocenteArea(){
        // const arrayDoce=[];
        this.docenteAreaService.searchDocenteArea(this.area_id,this.supervisor_id).subscribe(
            resultado =>{
                this.docenteArea = resultado;
            },
            error2 => {
                ("erro "+error2);
            },
            ()=>{
                alert(" docente area "+this.docenteArea);
            }
        )

    }

}
