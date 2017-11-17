import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {CompleterData, CompleterService} from 'ng2-completer';
import {DocenteService} from '../../../../../../service/docente.service';
import {AvaliacaoService} from '../../../../../../service/avaliacao.service';


@Component({
  selector: 'app-adicoinar-avaliadores',
  templateUrl: './adicoinar-avaliadores.component.html',
  styleUrls: ['./adicoinar-avaliadores.component.scss']
})
export class AdicoinarAvaliadoresComponent implements OnInit {

    @Output() output = new EventEmitter();

    protected dataServicedocente: CompleterData;

    docentes: any = [];
    private avaliadorSelecionado;
    private isEnabledButaoAdicionar: boolean = true;

    @Input() protocolo: any;
    avaliador = {
        fase : '',
        docentes_id : 0,
        data_limite : '',
        data : '',
        id : 0,
    };

    constructor(private docentesService: DocenteService, private avaliacaoService: AvaliacaoService, private completerService: CompleterService) {
        this.getDocetes();
    }



    ngOnInit() {
    }


    salvarAvaliadors(){
         let dataLimite = new Date();
         dataLimite.setDate(new Date().getDate() + 15);
        this.avaliador.fase =  "Protocolo";
        this.avaliador.docentes_id = this.avaliadorSelecionado.id;
        this.avaliador.data = this.formatarData(new Date);
        this.avaliador.data_limite = this.formatarData(dataLimite);
        this.avaliador.id = this.protocolo.id;

        let avaliacao: any;
        this.avaliacaoService.saveAvaliacao(this.avaliador).subscribe(
            (response: Response) => {
                avaliacao = response['avaliacao'];
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            },
            () => {
                this.output.emit({avaliadorSelecionado: avaliacao, isAdicionado: true});
            }
        );




    }


    formatarData(data: Date){
        return data.getFullYear()+"-"+data.getMonth()+"-"+data.getDate();
    }









    getDocetes(){
        let docentes = [{nome: "Hele", apelido: 'Hele'}];
        this.docentesService.getDocente().subscribe(
            (resultado: Response) => {
                docentes = resultado['docentes'];
                console.log(resultado);
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            () => {
                this.docentes = docentes;
                this.dataServicedocente = this.completerService.local(this.docentes, 'nome', 'nome');
            }
        );
    }


    selecionarAvaliador(selecionado) {
        this.isEnabledButaoAdicionar = false;
        this.avaliadorSelecionado = selecionado.originalObject;
    }




    ngOnDestroy(){
        // this.subcreverDocentes.unsubscribe();
        // this.subcreverdocente.unsubscribe();
    }

}
