import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-tabela-trabalhos-completo',
  templateUrl: './tabela-trabalhos-completo.component.html',
  styleUrls: ['./tabela-trabalhos-completo.component.scss']
})
export class TabelaTrabalhosCompletoComponent implements OnInit {


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
        this.saidaDados.emit({trabalhoSelecionado: this.trabalhoSelecionado, docentes: this.docentes});
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


    getEstado(sup_confirm){
        if(sup_confirm == 1)
            return "Confirmado";
        return "Nao Confirmado";
    }

}
