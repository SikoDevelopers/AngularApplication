import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {TrabalhoService} from '../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Subscribable} from 'rxjs/Observable';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.component.html',
  styleUrls: ['./trabalhos.component.scss']
})
export class TrabalhosComponent implements OnInit, OnDestroy {


    subcricao: any;

  trabalhos: any = [];
  constructor(private  trabalhosService: TrabalhoService) {

  }

  ngOnInit() {
      this.getTrabalhos();
  }

    getTrabalhos(){
        this.subcricao = this.trabalhosService.getTrabalho(false,5).subscribe(
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
