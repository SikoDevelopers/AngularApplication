import { Component, OnInit } from '@angular/core';
import {CursoService} from '../../../../service/curso.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-criar-conta-form',
  templateUrl: './criar-conta-form.component.html',
  styleUrls: ['./criar-conta-form.component.scss']
})
export class CriarContaFormComponent implements OnInit {
  label: string = "Selecione o Curso";
  cursos: any  = [];
  cursos_id: any;

  constructor(private cursoService: CursoService) {

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
        'aplido' : formulario.value.apelido,
        'nome': formulario.value.nome,
        'cursos_id': this.cursos_id,
        'email': formulario.value.email,
        'password': formulario.value.password
    };

    console.log(user);
  }


  getCursoSelect(event){
    console.log(event);
  }


}
