import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutenticacaoService} from '../../service/autenticacao.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Token} from '../../models/Token';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {
  opcoesAreas: any = [
    {
      'value':'todas',
      'option':'TODAS AREAS'
    }
  ];

  userLogdo: any;
  context = this;


  constructor(private autenticacaoServie: AutenticacaoService) {
  }

  opcoesCursos: any = [
    {
      'value':'TODOS-CURSOS',
      'option':'TODOS CURSOS'
    }
  ];


  ngOnInit() {
      this.verificarUserLogado();
  }



  verificarUserLogado(){
      if(localStorage.getItem('token'))
        this.autenticacaoServie.verificarUserLogado(this.mostrarUser, this.getErros, this);
      else
        console.log('Nenum user esta logado');

  }

  mostrarUser (user, context){
    context.userLogdo = user;
    console.log(context.userLogdo);
  }


  getErros(erros: HttpErrorResponse){
      if(JSON.parse(erros.error)['mensagem'] == 'Token Expirado') {
          localStorage.removeItem('token')
          console.log('Token removido com sucesso porque esta expirado');
      } else
      if(JSON.parse(erros.error)['mensagem'] == 'Token Invalido') {
          localStorage.removeItem('token');
          console.log('Token removido com sucesso porque eh invalido');
      }
      else
        console.log('Nao fazer nada em relacao ao token');
  }

}
