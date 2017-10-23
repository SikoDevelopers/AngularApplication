import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AutenticacaoService} from '../../../service/autenticacao.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    mensagemErro: String = "";
    mensagemSucesso: String = "";
    loginNegado: String = "";


  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }


    onLogin(formulario: NgForm){
      let user = {
          'email': formulario.value.email,
          'password': formulario.value.password
      };

      this.autenticacaoService.login(user, dados => {

          this.loginNegado = 'sucesso';
          this.mensagemSucesso = "Credenciais validas! Aguarde...";

          if(dados) {
              if (dados['user']['docente'] != null)
                  window.location.href = "docente/supervisandos";

              if (dados['user']['estudante'] != null)
                  window.location.href = "estudante/submeter-trabalho";

              if (dados['user']['director_curso'] != null)
                  alert("Sera direcionado para Director de Curso");

              if (dados['user']['funcionario'] != null)
                  alert("Sera direcionado para Funcionario");


              console.log(dados['user']['docente']);
          }
          console.log(dados);
      },
          (erros: HttpErrorResponse) => {

              if(JSON.parse(erros.error)['mensagem'] == 'Credencias Erradas') {
                  this.loginNegado = 'erro';
                  this.mensagemErro = "Email ou passsword invalidos";
                  console.log(erros);
              }
          });

    }



    validarFormulario(formulario: NgForm){
        return formulario.invalid;
    }

    mostarMensagem(email, password): boolean {

        if (email.invalid && (email.dirty || email.touched)) {
            this.mensagemErro = "Email eh obrigatorio";
            return true;
        }

        if (password.invalid && (password.dirty || password.touched)) {
            this.mensagemErro = "Password eh obrigatorio";
            return true;
        }
    }

}
