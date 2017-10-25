import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DocenteService} from '../../../../service/docente.service';
import {HttpErrorResponse} from '@angular/common/http';
import {CreateNewAutocompleteGroup, SelectedAutocompleteItem} from 'ng-auto-complete';

@Component({
  selector: 'app-adicionar-participantes',
  templateUrl: './adicionar-participantes.component.html',
  styleUrls: ['./adicionar-participantes.component.scss']
})
export class AdicionarParticipantesComponent implements OnInit {

  @ViewChild('modalParticipantes') modalParticipante;
  @Output() output = new EventEmitter();
  @Output() reabrirDialog = new EventEmitter();
  docentes:any;
  constructor(private docentesService: DocenteService) { }

  ngOnInit() {
    this.output.emit(this.modalParticipante);
    this.getDocetes();
  }

  salvarParticipantes(){
    this.modalParticipante.hide();
    this.reabrirDialog.emit('reabrir');
  }


  getDocetes(){
    let docentes: any;
    this.docentesService.getDocente().subscribe(
        (resultado: Response) => {
          docentes = resultado;
          console.log(resultado);
        },
        (erros: HttpErrorResponse) => {
          console.error(erros);
        },
        () => {
          this.docentes =[CreateNewAutocompleteGroup(
              'Escolha um docente',
              'completer',
              docentes['docentes'],
              {titleKey: 'nome', childrenKey: null}

          )];
        }
    );
  }


  Selected(docente: SelectedAutocompleteItem){
    console.log(docente);
  }



}
