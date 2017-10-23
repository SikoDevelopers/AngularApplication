import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DocenteService} from '../../../../service/docente.service';
import {UserService} from '../../../../service/user.service';
import {AutenticacaoService} from '../../../../service/autenticacao.service';

@Component({
  selector: 'app-adicionar-docentes-form',
  templateUrl: './adicionar-docentes-form.component.html',
  styleUrls: ['./adicionar-docentes-form.component.scss']
})
export class AdicionarDocentesFormComponent implements OnInit {


  @ViewChild('modal') modal: any;
  @Output() output = new EventEmitter();

  constructor(private docenteService: DocenteService, private userService: AutenticacaoService) { }

  ngOnInit() {
    this.output.emit(this.modal);
  }

    salvarDocente(nome, apelido){
      let docente = {
        nome: nome.value,
        apelido: apelido.value,
      };

      console.log(docente);


      this.docenteService.

    }


}
