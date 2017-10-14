import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutenticacaoService} from '../../service/autenticacao.service';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  userLogdo: any;
  context = this;

  // @Output('user') emissor = new EventEmitter();

  constructor(private autenticacaoServie: AutenticacaoService) {

  }

  ngOnInit() {
      this.verificarUserLogado();
      // this.emissor.emit({user: this.userLogdo});
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
