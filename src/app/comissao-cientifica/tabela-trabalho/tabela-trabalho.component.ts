import { Component, OnInit, OnDestroy } from '@angular/core';
import {TrabalhoService} from '../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tabela-trabalho',
  templateUrl: './tabela-trabalho.component.html',
  styleUrls: ['./tabela-trabalho.component.scss']
})
export class TabelaTrabalhoComponent implements OnInit, OnDestroy {

  trabalhos: Array<any> ;
    subcricao: any;

  constructor(private trabalhosService: TrabalhoService) {
      this.getTrabalhos();
  }

  ngOnInit() {

  }


    getTrabalhos(){
        this.subcricao = this.trabalhosService.getTrabalho(true,5).subscribe(
            (resultado: Response) =>{
                this.trabalhos = resultado['trabalhos'].data;
            },
            (erros: HttpErrorResponse)=> {
                console.error(erros);
            },
            ()=>{
                console.log(this.trabalhos);
            }
        );
    }

    ngOnDestroy(): void {
        this.subcricao.unsubscribe();
    }


}
