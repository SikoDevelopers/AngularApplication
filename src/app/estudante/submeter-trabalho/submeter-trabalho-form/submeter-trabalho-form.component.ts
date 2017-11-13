import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from "../../../service/area.service";
import {UserService} from "../../../service/user.service";
import {SupervisorExternoService} from "../../../service/supervisor-externo.service";
import {DocenteService} from "../../../service/docente.service";
import {DocenteAreaService} from "../../../service/docente-area.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Data} from "@angular/router";
import {TrabalhoService} from "../../../service/trabalho.service";
import { CompleterService, CompleterData } from 'ng2-completer';

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
    nomeCoSup;
    apelidoCoSup;
    graAcademico_id;
    control:boolean =false;

    protected coSupervisor: string;
    protected captain: string;
    protected dataService: CompleterData;
    protected coSupervisores = [
        { color: 'red', value: '#f00' },
        { color: 'green', value: '#0f0' },
        { color: 'blue', value: '#00f' },
        { color: 'cyan', value: '#0ff' },
        { color: 'magenta', value: '#f0f' },
        { color: 'yellow', value: '#ff0' },
        { color: 'black', value: '#000' }
    ];
  constructor(
      private _areas:AreaService,
      private userService:UserService,
      private supervisorService: SupervisorExternoService,
      private docenteService: DocenteService,
      private areaService : AreaService,
      private docenteAreaService : DocenteAreaService,
      private trabalhoService : TrabalhoService,
      private completerService: CompleterService
  ) {

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


      this.userService.logado(token).subscribe(
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
    gravarCoSup(evento){
        this.control = true;
      this.graAcademico_id=evento.grauAcadmico;
      this.nomeCoSup=evento.nome;
      this.apelidoCoSup= evento.apelido;
        this.control=true;
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
                  this.dataService = this.completerService.local(this.supervisores, 'nome', 'nome,apelido');

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


    selecionarCoSup(selecionado) {

        this.coSupervisor = selecionado.originalObject.id;
        this.control=false;

    }

submeter(){


    let formData= new FormData();
alert(this.control);
    if(this.control==true){
alert('criou se novo');
        formData.append( 'nomeCoSup',''+this.nomeCoSup);
        formData.append( 'apelidoCoSup',''+this.apelidoCoSup);
        formData.append( 'grauAcademico_id',''+this.graAcademico_id);

    }else{
        alert('selec');
        formData.append( 'coSupId',''+this.coSupervisor);
    }
    formData.append( 'control',''+this.control);
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
            alert('processo completo');
            // window.location.href = "estudante/trabalhos-submetidos";
            console.log('hello');
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
