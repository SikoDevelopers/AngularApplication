import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AutenticacaoService} from '../../../service/autenticacao.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor(private autenticacaoService: AutenticacaoService) { }

  ngOnInit() {
  }


    onLogin(formulario: NgForm){
      let user = {
          'email': formulario.value.email,
          'password': formulario.value.password
      };

      this.autenticacaoService.login(user, dados => {
          alert("Login aceite com sucesso");

          if(dados['user']['docente'] != null)
               alert("Sera direcionado para Docente");

           if(dados['user']['estudante'] != null)
               window.location.href = "estudante/submeter-trabalho";

           if(dados['user']['director_curso'] != null)
               alert("Sera direcionado para Director de Curso");

           if(dados['user']['funcionario'] != null)
               alert("Sera direcionado para Funcionario");


          console.log(dados['user']['docente']);
      },
          erros => {
            alert("Nao pode Fazer Login com essas credenciais");
          });


    }





}
