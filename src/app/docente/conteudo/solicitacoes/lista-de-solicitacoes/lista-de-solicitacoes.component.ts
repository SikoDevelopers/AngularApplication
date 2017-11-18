import { Component, OnInit } from '@angular/core';
import {DocenteService} from "../../../../service/docente.service";
import {UserService} from "../../../../service/user.service";
import {TrabalhoService} from "../../../../service/trabalho.service";

@Component({
  selector: 'app-lista-de-solicitacoes',
  templateUrl: './lista-de-solicitacoes.component.html',
  styleUrls: ['./lista-de-solicitacoes.component.scss']
})
export class ListaDeSolicitacoesComponent implements OnInit {

  user: any;
  docente: any;
  solicitacoes: any;
    fileEArea: any;
  constructor(private _docenteService: DocenteService,
              private _userService: UserService,
              private _trabalhoService: TrabalhoService
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
            //console.log(this.user.id);
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
            this.getSolicitacoes(this.docente.id);
        }
    );
  }

  getSolicitacoes(id:number){
      this._docenteService.getSolicitacoesDeSupervisao(id).subscribe(
          resultado => {
              this.solicitacoes = resultado['solicitacoes'];
          },
          error2 => {console.log("Ocorreu um error"+ error2)},
          () => {
            //  this.getAreaEFicheiroDoTrabalho(this.solicitacoes.id);
          }
      );
  }

}
