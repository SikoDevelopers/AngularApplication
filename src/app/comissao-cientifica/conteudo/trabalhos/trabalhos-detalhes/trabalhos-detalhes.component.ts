import {Component, EventEmitter, Input, OnInit, OnChanges, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-trabalhos-detalhes',
  templateUrl: './trabalhos-detalhes.component.html',
  styleUrls: ['./trabalhos-detalhes.component.scss']
})
export class TrabalhosDetalhesComponent implements OnInit, OnChanges {

    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
    @Input() trabalho;
    docentes: any;
    supervisorExterno: any;

  constructor(private trabalhosService: TrabalhoService) {

  }

  ngOnInit() {
    this.output.emit(this.modal);
  }


  ngOnChanges(){
      // this.getParticipantesTrabalhos(this.trabalho.id, this.docentes, this.su);
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




    chamarObservable(idTrabalho){
        let participantes;
        let externo;
        this.trabalhosService.getParticipantes(idTrabalho).subscribe(
            (resultado: Response) =>{
                console.log(resultado);
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






    extratirDados(participantes, externo, contexto){
        contexto.participantes = participantes;
        contexto.externo = externo;
    }






}
