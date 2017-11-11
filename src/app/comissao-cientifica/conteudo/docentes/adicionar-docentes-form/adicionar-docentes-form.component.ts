import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {DocenteService} from '../../../../service/docente.service';
import {UserService} from '../../../../service/user.service';
import {AutenticacaoService} from '../../../../service/autenticacao.service';
import {GrauAcademicoService} from '../../../../service/grau-academico.service';
import {CompleterData, CompleterService} from 'ng2-completer';

@Component({
  selector: 'app-adicionar-docentes-form',
  templateUrl: './adicionar-docentes-form.component.html',
  styleUrls: ['./adicionar-docentes-form.component.scss']
})
export class AdicionarDocentesFormComponent implements OnInit {


  @ViewChild('modal') modal: any;
  @Output() output = new EventEmitter();

  //Para o select
    @ViewChild('selectGrau') selectGrau;
    protected dataServiceGrau: CompleterData;
    grauAcademicos: any  = [];
    grauAcademico_id: any;

  constructor(private docenteService: DocenteService,
              private autenticacaService: AutenticacaoService,
              private grauAcademicoService: GrauAcademicoService,
              private completerService: CompleterService) {
      this.getGrauAcademico();
  }

  ngOnInit() {
    this.output.emit(this.modal);
  }

    salvarDocente(nome, apelido, email){


      let userDocente = {
          email: email.value,
          password: 12345,
          nome: nome.value,
          apelido: apelido.value,
          grau_academico_id: this.grauAcademico_id.id,
      };

      console.log(userDocente);

      this.autenticacaService.criarContaDocente(userDocente, this.contaCriada, this.contaNaoCriada, this.erroCriarConta);

        this.modal.hide();
    }



    getGrauAcademico(){
        this.grauAcademicoService.getGrauAcademico().subscribe(
            resultado => { this.grauAcademicos = resultado['grau-academicos'];},
            error2 => {console.log(error2);},
            () => {
                this.dataServiceGrau = this.completerService.local(this.grauAcademicos, 'designacao', 'designacao');
                console.log(this.grauAcademicos);
            }
        );
    }

    selecionarGrau(selecionado) {
        this.grauAcademico_id = selecionado.originalObject;
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
