import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {TrabalhoService} from '../../../../../service/trabalho.service';

@Component({
  selector: 'app-tabela-protocolos',
  templateUrl: './tabela-protocolos.component.html',
  styleUrls: ['./tabela-protocolos.component.scss']
})
export class TabelaProtocolosComponent implements OnInit {

    protocolos: Array<any>;
    @Input() modal: any;
    @Output() saidaDados = new EventEmitter();
    @ViewChild('modalDetalhes') modalDetalhes;
    protocoloSelecionado: any;
    avaliadorSelecionado: any;

    subcricao: any;
    docentes: any;


    constructor(private trabalhosService: TrabalhoService) {

    }

    ngOnInit() {
        this.getProtocolos();
    }


    getProtocolos(){
        this.subcricao = this.trabalhosService.getProtocolo(100).subscribe(
            (resultado: Response) =>{
                this.protocolos = resultado['protocolos'];
                console.log(this.protocolos);
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            ()=>{
                console.log(this.protocolos);
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


    onClickTrabalho(protocolo){

        let avaliacao;

        this.trabalhosService.getAvaliacao(protocolo.id).subscribe(
            (ressultado: Response) => {
                avaliacao = ressultado['avaliacao'];
            },
            (erros: HttpErrorResponse) => {
                console.log(erros);
            },
            () => {
                console.log(avaliacao);
                this.avaliadorSelecionado = avaliacao;
                this.protocoloSelecionado = protocolo;
                this.saidaDados.emit({protocoloSelecionado: this.protocoloSelecionado, avaliadorSelecionado: this.avaliadorSelecionado, parecerFinal: this.getParecerFinal(this.avaliadorSelecionado)});
                this.modal.show();
            }
        );

    }

    getParecerFinal(avaliacao) : boolean{
        return !!avaliacao;
    }

    ngOnDestroy(): void {
        this.subcricao.unsubscribe();
    }

}
