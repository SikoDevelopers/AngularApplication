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

  constructor(private docenteService: DocenteService, private autenticacaService: AutenticacaoService) { }

  ngOnInit() {
    this.output.emit(this.modal);
  }

    salvarDocente(nome, apelido, email){


      let userDocente = {
          email: email.value,
          password: 12345,
          nome: nome.value,
          apelido: apelido.value,
      };

      console.log(userDocente);

      this.autenticacaService.criarContaDocente(userDocente, this.contaCriada, this.contaNaoCriada, this.erroCriarConta);


    }


    contaCriada(resultado){
      console.log("Conta Criada");
      console.log(resultado);
    }

    contaNaoCriada(resultado){
        console.log("Conta Nao Criada");
        console.log(resultado);
    }

    erroCriarConta(resultado){
        console.log("Erro ao criar conta");
        console.error(resultado);
    }

}
