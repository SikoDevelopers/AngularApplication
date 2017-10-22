import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from "../../../service/area.service";
import {UserService} from "../../../service/user.service";
import {SupervisorExternoService} from "../../../service/supervisor-externo.service";
import {DocenteService} from "../../../service/docente.service";
import {DocenteAreaService} from "../../../service/docente-area.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Data} from "@angular/router";
import {TrabalhoService} from "../../../service/trabalho.service";

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
    area_id;
  areas: any = [];
  docenteArea;
    titulo;
    descricao;
     news;
  constructor(
      private _areas:AreaService,
      private userService:UserService,
      private supervisorService: SupervisorExternoService,
      private docenteService: DocenteService,
      private areaService : AreaService,
      private docenteAreaService : DocenteAreaService,
      private trabalhoService : TrabalhoService
  ) {


      this.news={'protocolo':'eee',
      'user':'Teste ',
      'supervisor':'Teste ',
      'area':'Teste ',
      'titulo':'Teste ',
      'descricao':'Teste ',
      'data':'Teste ',
      'timestamp':'Teste '};
  }

  ngOnInit() {

    this.getUser();
    this.getSupervisores();
      this.getArea();


  }

    setAreaId(evento){
      this.area_id = evento.area_id;
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
            console.log('user retrivied');
          }
      );
  }

getSupervisores(){

      this.supervisores =[];


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




}
getArea(){
    this.areaService.getArea().subscribe(
        resultados => {
            this.areas = resultados['areas'];
        }
    )
}

submeter(){
    let formData= new FormData();
    formData.append('protocolo',this.file, this.file.name);
    formData.append( 'user',''+this.user.id);
    formData.append('supervisor',''+this.supervisor_id);
    formData.append( 'area',''+this.area_id);
    formData.append('titulo',''+this.titulo);
    formData.append('descricao',''+this.descricao);
    formData.append('data',''+new Date());
    formData.append('timestamp',''+new Date().getTime());



    this.trabalhoService.saveTrabalho(formData).subscribe(
        resultados=>{
            console.log(resultados);
        },
        error2 => {
            console.log(error2);
        },
        ()=>{
            alert('processo completo')
        }
    )


}

    atribuirValor(evento){

      this.file = evento.file;
    }


    atribuirSupervisor(evento){

        this.supervisor_id = evento.supervisor_id;
        this.getDocenteArea();
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
