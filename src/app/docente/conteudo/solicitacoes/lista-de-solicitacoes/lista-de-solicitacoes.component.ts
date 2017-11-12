import { Component, OnInit } from '@angular/core';
import {DocenteService} from "../../../../service/docente.service";
import {UserService} from "../../../../service/user.service";

@Component({
  selector: 'app-lista-de-solicitacoes',
  templateUrl: './lista-de-solicitacoes.component.html',
  styleUrls: ['./lista-de-solicitacoes.component.scss']
})
export class ListaDeSolicitacoesComponent implements OnInit {

  user: any;
  docente: any;
  constructor(private _docenteService: DocenteService,
              private _userService: UserService
  ) { }

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
         // this.getEstudantes(this.docente.id);
          console.log(this.docente);
        }
    );
  }



}
