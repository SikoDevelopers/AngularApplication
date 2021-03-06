import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../../../service/user.service";
import {DocenteService} from "../../../../../service/docente.service";

@Component({
  selector: 'app-tabela-actuais',
  templateUrl: './tabela-actuais.component.html',
  styleUrls: ['./tabela-actuais.component.scss']
})
export class TabelaActuaisComponent implements OnInit {
  estudantes : any;
  user:any;
  docente:any;


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
          this.getEstudantes(this.docente.id);
          console.log(this.docente);
        }
    );
  }

  getEstudantes(id:number){
    this._docenteService.getSupervisonandos(id).subscribe(
        resultado => {
          this.estudantes = resultado['estudantes_do_docente'];

        },
        error2 => {
          console.log("Error ao carregar Estudantes " + error2)
        },
        () => {
            console.log(this.estudantes[0][0].nome);


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
