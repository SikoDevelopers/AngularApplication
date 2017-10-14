import { Component, OnInit } from '@angular/core';
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
export class CriarContaFormComponent implements OnInit {
  label: string = "Selecione o Curso";
  cursos: any  = [];
  cursos_id: any;

  constructor(
      private cursoService: CursoService,
      private autenticacaoService: AutenticacaoService
  ) {
    this.cursos_id = 0;
  }

  ngOnInit() {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.getCurso().subscribe(
        (resultado: Response) =>{
            this.cursos = resultado['cursos'];
        },
        (erros: HttpErrorResponse) =>{
            console.log(erros);
        },
        () => {
          console.log('Cursos carregados com sucesso');
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


    this.autenticacaoService.criarContaEsudante(user,
            dados =>{
        window.location.href = "estudante/submeter-trabalho";
    },
        negado => {
        console.log(negado);
            alert("Nao pode entrar no sistema com essas credenciais"+ negado);
        },
        function (erro) {
            alert("Nao pode criar conta com essas credenciais "+ erro)
        });



  }


  getCursoSelect(event){
    this.cursos_id = event.cursos_id;
  }

    validarEmail(formulario: NgForm){
        // this.userService.validarEmail(formulario.value.email).subscribe(
        //     (resultado: Response) => {
        //         if (resultado['estado'] == 'valido') {
        //             console.log(resultado);
        //         };
        //     },
        //         (erros)=> {
        //             console.log('O email nao eh valido');
        //         },
        //
        //
        // );
    }


    validarFormulario(formulario: NgForm){

      if (formulario.invalid || this.cursos_id == 0 )
          return true;
      else
          return false;
    }


}
