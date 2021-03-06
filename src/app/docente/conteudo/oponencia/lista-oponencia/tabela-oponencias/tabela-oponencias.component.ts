import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../service/user.service";
import {DocenteService} from "../../../../../service/docente.service";

@Component({
  selector: 'app-tabela-oponencias',
  templateUrl: './tabela-oponencias.component.html',
  styleUrls: ['./tabela-oponencias.component.scss']
})
export class TabelaOponenciasComponent implements OnInit {

  oponencias: any;
  user: any;
  docente: any;


  constructor(private _userService:UserService,
              private _docenteService:DocenteService
  ){}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    let token = localStorage.getItem('token');

    this._userService.logado(token).subscribe(
        resultado => {
          this.user = resultado
        },
        error2 => {
        },
        () => {
          this.getDocente(this.user.id);
        }
    );

  }

  getDocente(id) {
    this._docenteService.getDocentePorId(id).subscribe(
        resultado => {
          this.docente = resultado['docente']
        },
        error2 => {
          console.log("Error ao carregar Docente " + error2)
        },
        () => {
          this.getOponencias(this.docente.id);
          console.log(this.docente);
        }
    );
  }

  getOponencias(id:number){
    this._docenteService.getOponencias(id).subscribe(
        resultado => {
          this.oponencias = resultado['oponencias_do_docente'];

        },
        error2 => {
          console.log("Error ao carregar OPonencias" + error2)
        },
        () => {
            console.log(this.oponencias[1][0].titulo);
        }
    );
  }
  getEstado(is_aprovado){
    if(is_aprovado){
      return "Aprovado";
    }
    else
      return "Nao Aprovado";
  }

}

