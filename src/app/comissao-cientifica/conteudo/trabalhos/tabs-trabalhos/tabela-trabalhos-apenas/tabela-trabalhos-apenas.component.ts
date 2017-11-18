import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tabela-trabalhos-apenas',
  templateUrl: './tabela-trabalhos-apenas.component.html',
  styleUrls: ['./tabela-trabalhos-apenas.component.scss']
})
export class TabelaTrabalhosApenasComponent implements OnInit {


    trabalhos: Array<any>;
    @Input() modal: any;
    @Output() saidaDados = new EventEmitter();
    @ViewChild('modalDetalhes') modalDetalhes;
    trabalhoSelecionado: any;
    subcricao: any;
    docentes: any;
    avaliadorSelecionado: any;


    constructor(private trabalhosService: TrabalhoService) {

    }

    ngOnInit() {
        this.getTrabalhosApenas();
    }


    getTrabalhosApenas(){
        this.subcricao = this.trabalhosService.getTrabalhosApenas().subscribe(
            (resultado: Response) =>{
                this.trabalhos = resultado['trabalhos'];
                console.log(this.trabalhos[0]);
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            ()=>{
                console.log(this.trabalhos);
            }
        );
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

        let avaliacao;

        this.trabalhosService.getAvaliacao(trabalho.id).subscribe(
            (ressultado: Response) => {
                avaliacao = ressultado['avaliacao'];
            },
            (erros: HttpErrorResponse) => {
                console.log(erros);
            },
            () => {
                console.log(avaliacao);
                this.avaliadorSelecionado = avaliacao;
                this.trabalhoSelecionado = trabalho;
                this.saidaDados.emit({protocoloSelecionado: this.trabalhoSelecionado, avaliadorSelecionado: this.avaliadorSelecionado, parecerFinal: this.getParecerFinal(this.avaliadorSelecionado)});
                this.modal.show();
            }
        );
    }


    getParecerFinal(avaliacao) : boolean{
        return !!avaliacao;
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
