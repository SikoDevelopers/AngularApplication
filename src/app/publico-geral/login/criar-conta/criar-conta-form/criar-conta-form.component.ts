import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../../../service/curso.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-criar-conta-form',
  templateUrl: './criar-conta-form.component.html',
  styleUrls: ['./criar-conta-form.component.scss']
})
export class CriarContaFormComponent implements OnInit {
  label: string = "Selecione o Curso";
  cursos: any  = [];
  cursos_id: any;

  constructor(private cursoService: CursoService, private userService: UserService) {
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

    this.userService.signUp(user).subscribe(
        (resultado: Response) => {
            alert("Conta Criada com sucesso");
            console.log(resultado);
        },
    (erro: HttpErrorResponse)=> {
            alert("Ocorreu algum erro ao criar conta");
            console.error(erro);
    },
    ()=>{
            console.log("Processo de criacao de conta terminado");
      }
    );
  }


  getCursoSelect(event){
    this.cursos_id = event.cursos_id;
  }


    validarFormulario(formulario: NgForm){
      return (formulario.valid && this.cursos_id != 0);
    }


}
