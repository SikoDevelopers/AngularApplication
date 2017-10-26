import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../../../../service/docente.service';
import {HttpErrorResponse} from '@angular/common/http';
import {AvatarComponent} from 'ng2-avatar';

@Component({
  selector: 'app-lista-docentes',
  templateUrl: './lista-docentes.component.html',
  styleUrls: ['./lista-docentes.component.scss']
})
export class ListaDocentesComponent implements OnInit {

  docentes: Array<any>;
  docenteSelecionado: any;
  modal: any;

  constructor(private docenetesService: DocenteService, private avatar: AvatarComponent) { }

  ngOnInit() {
    this.getDocentes();
  }


  getDocentes(){
    let result: any;

    this.docenetesService.getDocentesEspecificacoes(true, 6 ).subscribe(
        (resultado: Response) => {
          result = resultado['docentes']['data'];
          console.log(resultado);
        },
    (erros: HttpErrorResponse) => {
          console.log(erros);
      },
        () => {
          this.docentes = result;
        }
    );
  }


    getModal(evento){
        this.modal = evento;
        console.log(evento);
    }


    // onClickTrabalho(trabalho){
    //     this.trabalhoSelecionado = trabalho;
    //     this.getParticipantesTrabalhos(trabalho.id);
    //     this.modal.show();
    // }



    getFuncaoColor(){
        return this.avatar.background;
    }


    chamarDialog($evento, docente){

        this.docenteSelecionado = docente;
        console.log(this.modal);

        this.modal.show();
        console.log("Chamando a dialog");
    }
}
