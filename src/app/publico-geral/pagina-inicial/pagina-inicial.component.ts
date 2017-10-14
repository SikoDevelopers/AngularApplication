import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutenticacaoService} from '../../service/autenticacao.service';

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

    this.autenticacaoServie.verificarUserLogado(this.mostrarUser, this.getErros, this);

  }

  mostrarUser (user, context){
    context.userLogdo = user;
    console.log(context.userLogdo);
  }


  getErros(erros){
      console.log(erros);
  }

}
