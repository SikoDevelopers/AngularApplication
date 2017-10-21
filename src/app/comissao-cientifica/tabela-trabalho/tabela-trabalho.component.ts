import {Component, OnInit, OnDestroy, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import {TrabalhoService} from '../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tabela-trabalho',
  templateUrl: './tabela-trabalho.component.html',
  styleUrls: ['./tabela-trabalho.component.scss']
})
export class TabelaTrabalhoComponent implements OnInit, OnDestroy {

  trabalhos: Array<any> ;
  @Output() saidaDados = new EventEmitter();
  trabalhoSelecionado: any;
  @ViewChild('modalDetalhes') modalDetalhes;

    subcricao: any;
    @Input() modal: any;
    docentes: any;
    supervisorExterno: any;

  constructor(private trabalhosService: TrabalhoService) {

  }

  ngOnInit() {
      this.getTrabalhos();

  }


    getTrabalhos(){
        this.subcricao = this.trabalhosService.getTrabalho(true,5).subscribe(
            (resultado: Response) => {
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

    ngOnDestroy(): void {
        this.subcricao.unsubscribe();
    }


    getEstado(is_aprovado){
        if(is_aprovado){
            return "Aprovado";
        }
        else
            return "Nao Aprovado";
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
        this.getParticipantesTrabalhos(trabalho.id);
        this.trabalhoSelecionado = trabalho;
        this.saidaDados.emit({'docentes' : this.docentes, 'supervisorExterno': this.supervisorExterno});
        this.modal.show();
    }


    getParticipantesTrabalhos(idTrabalho){
        let participantes;
        let externo;
        this.trabalhosService.getParticipantes(idTrabalho).subscribe(
            (resultado: Response) =>{
                console.log(resultado);
                participantes = resultado;
                externo = resultado;
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            () => {
                this.docentes = participantes;
                this.supervisorExterno = externo;
                console.log("Requisicao completada");
            }


        );
    }

}
