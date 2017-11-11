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
    trabalhoSelecionado: any;
    subcricao: any;
    docentes: any;


    constructor(private trabalhosService: TrabalhoService) {

    }

    ngOnInit() {
        this.getProtocolos();
    }


    getProtocolos(){
        this.subcricao = this.trabalhosService.getProtocolo().subscribe(
            (resultado: Response) =>{
                this.protocolos = resultado['protocolos'];
                console.log(this.protocolos[0]);
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


    onClickTrabalho(trabalho){
        this.trabalhoSelecionado = trabalho;
        this.modal.show();
    }




    ngOnDestroy(): void {
        this.subcricao.unsubscribe();
    }

}
