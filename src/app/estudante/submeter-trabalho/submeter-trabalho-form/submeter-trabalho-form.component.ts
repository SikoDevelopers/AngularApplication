import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from "../../../service/area.service";
import {UserService} from "../../../service/user.service";
import {SupervisorExternoService} from "../../../service/supervisor-externo.service";
import {DocenteService} from "../../../service/docente.service";
import {DocenteAreaService} from "../../../service/docente-area.service";
import {forEach} from "@angular/router/src/utils/collection";

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
  opcoes: any = [
    {
      'id':'SAUDE',
      'designacao':'OPTION'
    },
    {
      'id':'RECURSOS HUMANOS',
      'designacao':'RECURSOS HUMANOS'
    },
    {
      'id':'ECONOMIA MUNDIAL',
      'designacao':'ECONOMIA MUNDIAL'
    },
    {
      'id':'DESENHO DE BASE DE DADOS',
      'designacao':'DESENHO DE BASE DE DADOS'
    },
    {
      'id':'SEGURANCA DE APLICACOES WEB',
      'designacao':'SEGURANCA DE APLICACOES WEB'
    },
  ];
  constructor(
      private _areas:AreaService,
      private userService:UserService,
      private supervisorService: SupervisorExternoService,
      private docentesAreaService: DocenteAreaService
  ) { }

  ngOnInit() {
    this.getCursos();
    this.getUser();
    this.getSupervisores();
  }
  getCursos(){
    this._areas.getArea().subscribe(
        resultado => { this.opcoes = resultado['areas'];},
        error2 => {console.log("Error")},
        () =>{
          console.log("Sucesso");
        }
    );
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

submeter(){
    alert(this.user.email);

}

    atribuirValor(evento){

      this.file = evento.file;
    }

}
