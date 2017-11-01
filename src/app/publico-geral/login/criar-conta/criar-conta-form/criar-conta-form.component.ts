import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {CursoService} from '../../../../service/curso.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import { Response } from '@angular/http';
import {Router} from '@angular/router';
import {AutenticacaoService} from '../../../../service/autenticacao.service';

@Component({
  selector: 'app-criar-conta-form',
  templateUrl: './criar-conta-form.component.html',
  styleUrls: ['./criar-conta-form.component.scss']
})
export class CriarContaFormComponent implements OnInit, OnChanges{
  label: string = "Selecione o Curso";
  cursos: any  = [];
  cursos_id: any;
  mensagemErro: String = "";


  constructor(
      private cursoService: CursoService,
      private autenticacaoService: AutenticacaoService
  ) {
    this.cursos_id = 0;
  }

  ngOnInit() {
    this.getCursos();
  }
  ngOnChanges(changes: SimpleChanges){
      console.log("Mudou");
  }

  getCursos(){
    this.cursoService.getCurso().subscribe(
        resultado => { this.cursos = resultado['cursos'];},
        error2 => {console.log(error2);},
        () => {
            console.log('Cursos carregados com sucesso ');
      }
    );
  }


  onSignUp(formulario: NgForm){

      const user: any = {
        'apelido' : formulario.value.apelido,
        'nome': formulario.value.nome,
        'cursos_id': this.cursos_id,
        'email': formulario.value.email,
        'password': formulario.value.password
    };


        console.log(user);
      if(formulario.value.password == formulario.value.confPassword) {
          this.autenticacaoService.criarContaEsudante(user,
              dados => {
                  window.location.href = "estudante/submeter-trabalho";
              },
              negado => {
                  alert("Nao pode entrar no sistema com essas credenciais" + negado);
              },
              function (erro) {
                  alert("Nao pode criar conta com essas credenciais " + erro)
              });

      }else{
        alert("As credenciais nao conscidem");
      }

  }



  getCursoSelect(event){
    this.cursos_id = event.area_id;
  }





    validarFormulario(formulario: NgForm){
            return formulario.invalid;
    }

    mostarMensagem(apelido, nome, email, password, confSenha): boolean{

        if(apelido.invalid && (apelido.dirty || apelido.touched)){
            this.mensagemErro = "Apelido eh obrigatorio";
            return true;
        }

        if(nome.invalid && (nome.dirty || nome.touched)){
            this.mensagemErro = "Nome eh obrigatorio";
            return true;
        }

        if(email.invalid && (email.dirty || email.touched)){
            this.mensagemErro = "Email eh obrigatorio";
            return true;
        }

        if(password.invalid && (password.dirty || password.touched)){
            this.mensagemErro = "Password eh obrigatorio";
            return true;
        }

        if(confSenha.invalid && (confSenha.dirty || confSenha.touched)){
            this.mensagemErro = "Confirmacao de senha Obrigatoria";
            return true;
        }
            return false;
    }







}
