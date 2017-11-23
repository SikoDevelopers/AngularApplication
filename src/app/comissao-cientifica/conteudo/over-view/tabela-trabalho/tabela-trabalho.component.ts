import {Component, OnInit, OnDestroy, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tabela-trabalho',
  templateUrl: './tabela-trabalho.component.html',
  styleUrls: ['./tabela-trabalho.component.scss']
})
export class TabelaTrabalhoComponent implements OnInit, OnDestroy {

  trabalhos: Array<any>;
  @Input() modal: any;
  @Output() saidaDados = new EventEmitter();
  @Input() paginacao = 5;
  trabalhoSelecionado: any;
  subcricao: any;
  docentes: any;


  constructor(private trabalhosService: TrabalhoService) {

  }

  ngOnInit() {
      this.getTrabalhos();
  }


    getTrabalhos(){
        this.subcricao = this.trabalhosService.getTrabalho(true, this.paginacao).subscribe(
            (resultado: Response) =>{
                console.log(resultado);
                this.trabalhos = resultado['trabalhos'].data;
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            ()=>{
                console.log(this.trabalhos);
            }
        );
    }

    getEstado(sup_confirm){
        if(sup_confirm == 1)
            return "Confirmado";
            return "Nao Confirmado";
    }


    getDataSubmissao(dataSubmissao){
        let data = new Date(dataSubmissao);
        return data.getDay() +" / "+data.getMonth()+ " / "+ data.getFullYear();
    }

    getModal(evento){
        this.modal = evento;
        console.log(evento);
    }


    onClickTrabalho(trabalho){
        this.trabalhoSelecionado = trabalho;
        this.getParticipantesTrabalhos(trabalho.id);
        this.modal.show();
    }


    getParticipantesTrabalhos(idTrabalho){
        let participantes;

        this.trabalhosService.getParticipantes(idTrabalho).subscribe(
            (resultado: Response) =>{
                console.log(resultado);
                participantes = resultado['docentes'];
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            () => {
                this.docentes = participantes;
                console.log("Requisicao completada");
            }

        );
    }

    ngOnDestroy(): void {
        this.subcricao.unsubscribe();
    }


}