import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AutenticacaoService} from '../../../service/autenticacao.service';
import {HttpErrorResponse} from '@angular/common/http';
import {TrabalhoService} from "../../../service/trabalho.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    mensagemErro: String = "";
    mensagemSucesso: String = "";
    loginNegado: String = "";
    hasjob : boolean;


  constructor(private autenticacaoService: AutenticacaoService, private trabalhoService: TrabalhoService) { }

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

              if (dados['user']['estudante'] != null) {
                  // alert(this.hasJob(dados['user'].id));
                  let resultado;
                  this.trabalhoService.hasJob(dados['user'].id).subscribe(
                      resul=>{
                          resultado = resul['resultado'];
                          console.log(resul['resultado']);
                      },
                      (erros)=>{
                          console.error(erros);
                      },
                      ()=>{
                          if (resultado) {
                              alert('Possui trabalhos');
                              window.location.href = "estudante/trabalhos-submetidos";
                          }
                          else {
                              window.location.href = "estudante/submeter-trabalho";
                          }
                      }

                  );

              }

              if (dados['user']['director_curso'] != null)
                  alert("Sera direcionado para Director de Curso");

              if (dados['user']['funcionario'] != null)
                  alert("Sera direcionado para Funcionario");


              console.log(dados['user']['docente']);
          }
          console.log(dados);
      },
          (erros: HttpErrorResponse) => {
                if(erros.status == 401){
                    this.loginNegado = 'erro';
                    this.mensagemErro = "Email ou passsword invalidos";
              }
              if(erros.status == 500){
                  this.loginNegado = 'erro';
                  this.mensagemErro = "Ocoreu um erro interno";
              }
              console.log(erros)
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

    hasJob(id:number){
        this.trabalhoService.hasJob(id).subscribe(
            resul=>{
                return resul['resultado'];
            }
        )
    }

}
