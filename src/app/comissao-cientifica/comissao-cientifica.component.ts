import { Component, OnInit } from '@angular/core';
import {ProcessoSubmissaoService} from '../service/processo-submissao.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-comissao-cientifica',
  templateUrl: './comissao-cientifica.component.html',
  styleUrls: ['./comissao-cientifica.component.scss']
})
export class ComissaoCientificaComponent implements OnInit {

  processoSubmissao: any;
  isPorcessoCriado: boolean;

  constructor(private processoSubmissaoService: ProcessoSubmissaoService) {
    this.isPorcessoCriado = true;
  }

  ngOnInit() {
    this.verificarProcesso();
  }


  verificarProcesso(){
    let processo;
    let verificar;

    this.processoSubmissaoService.getPrcesso_submissao().subscribe(
        (resultado: Response) => {
          processo = resultado['prcesso_submissao'];
          console.log(processo);
        },
        (erro: HttpErrorResponse) => {
          console.log(erro);

        },
        () => {
            if(processo.length > 0 && this.isprocessoValido(processo[0].data_fim) == true){
                console.log("O processo ja foi iniciado");
            }else {
                this.chamarDialog();
            }
        }
    );
  }

    isprocessoValido(data_fim = null){
      console.log(data_fim)
      let dataActual = new Date();
      return new Date(data_fim) > dataActual;
    }

    chamarDialog(){
        alert("Chamando a dialog");
    }


}
