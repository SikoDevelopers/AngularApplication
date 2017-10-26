import { Component, OnInit,Input, ViewChild } from '@angular/core';
import {TemaService} from "../../../service/tema.service";
import {UserService} from "../../../service/user.service";
import {DocenteService} from "../../../service/docente.service";
@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {
  temas: any;
  // @ViewChild('modalDetalhes')
  //modalDetalhes = true;
  @Input() modal: any;
  animal: string;
  name: string;
  user: any;
  docente: any;

  constructor(private _temaSevice: TemaService, private _userService: UserService, private _docenteService: DocenteService) {
  }

  ngOnInit() {
    this.getUser();
    //let user: any = this.getUser();
    //let docente = this.getDocente(43);
    //this.getTemasDoDocente(this.docente.id);
   // this.getTemas();
  }


  getModal(evento) {
    this.modal = evento;
  }

  onMostrarModal() {
    this.modal.show();
  }

  getUser() {
    let token = localStorage.getItem('token');

    this._userService.logoado(token).subscribe(
        resultado => {
          this.user = resultado
        },
        error2 => {
        },
        () => {
          this.getDocente(this.user.id);
          // return this.user;
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
           this.getTemas(this.docente.id);
        }
    );
  }

  getTemas(id:number) {
    this._temaSevice.getTemasDoDocente(id).subscribe(
        resultado => {
          this.temas = resultado['temas_docente']
        },
        error2 => {
          console.log("Error ao carregar " + error2)
        },
        () => {
          console.log("Sucesso ao Carregar Temas");
        }
    );
  }


}

  // getTemasDoDocente(id){
  //   this._temaSevice.getTemasDoDocente(id).subscribe(
  //       resultado => { this.temas = resultado['temas_docente']},
  //       error2 => {console.log("Error ao carregar "+error2)},
  //       () =>{
  //         console.log("Sucesso ao Carregar Temas");
  //       }
  // 