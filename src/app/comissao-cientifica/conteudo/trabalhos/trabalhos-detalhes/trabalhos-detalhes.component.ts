import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-trabalhos-detalhes',
  templateUrl: './trabalhos-detalhes.component.html',
  styleUrls: ['./trabalhos-detalhes.component.scss']
})
export class TrabalhosDetalhesComponent implements OnInit {

    @ViewChild('modal') modal;
    @Output() output = new EventEmitter();
    @Input() trabalho: any;
    @Input() docentes = [];
    @Input() modalParticipantes: any;
    @Input() docentesdicionados = [];


  constructor(private trabalhoService: TrabalhoService) {

  }

  ngOnInit() {
    this.output.emit(this.modal);
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

    adicionarParticipante() {
        this.modal.hide();

        this.modalParticipantes.show();
    }
 
 
 
     getModalParticipantes(evento) {
         console.log(evento);
         this.modalParticipantes = evento;
     }
 
     reabrirDialog(evento) {

         console.log(evento);
         this.docentesdicionados.push(evento);


         this.modalParticipantes.hide();
         this.modal.show();

     }
 
     salvarAlteracoes() {
         // console.log("Devem ser adicionados os seguintes docentes");
         // console.log(this.docentesdicionados);
         // console.log("Para este trabalho");
         // console.log(this.trabalho);

         if (this.verificarDuplicacoes() && this.verificarElementosDuplicados(this.docentesdicionados))
             if (this.verificarFuncoesDuplicadas(this.docentes, this.docentesdicionados))
                 this.salvarParticipantes();
             else
                 alert('Existem participantes com a mesma funcao');
         else
             alert('Existem docentes duplicados');

     }


    salvarParticipantes() {
        this.trabalhoService.adicinarParticipantes(this.trabalho, this.docentesdicionados).subscribe(
            (resultado: Response) => {
                console.log(resultado);
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            () => {
                alert("Participantes adicionados com  sucesso");
                this.modal.hide();
                this.docentesdicionados = [];
            }
        );
    }
  
  
      /**
            * Verifica se existe alguma duplicacao de docentes e participantes
            * @returns {boolean}
            */
      verificarDuplicacoes(): boolean {
          let isDuplicated: boolean = true;
          let docentesAdicionais = this.docentesdicionados;
          this.docentes.forEach(function (docente) {
              docentesAdicionais.forEach(function (docenteAdicionado) {
                  if (docenteAdicionado['id'] == docente['id'])
                      isDuplicated = false;
              });
          });

          return isDuplicated;
      }
  
  
      /**
            * verifica se existem participantes duplicados
            * @returns {boolean}
            */
      verificarElementosDuplicados(array): boolean {
          let isDuplicated: boolean = true;
          array.forEach(function (elemento, index) {
              if (array.indexOf(elemento, index + 1) > 1)
                  isDuplicated = false
          });

          return isDuplicated;
      }
  
  
      /**
            * Verifica se existe funcoes repetidas no docentes
            * @param docentes
            * @param participantes
            * @returns {boolean}
            */
      verificarFuncoesDuplicadas(docentes, participantes) {
          let funcoes = [];
          docentes.forEach(function (docente) {
              funcoes.push(docente.funcao.designacao);
          });

          participantes.forEach(function (participante) {
              funcoes.push(participante.funcao.designacao);
          });

          return this.verificarElementosDuplicados(funcoes);
      }
  
  
      fecharModal(evento) {
          this.modal.hide();
          this.docentesdicionados = [];
      }

    getTipoFicheiro(tipoFicheiro){
          return tipoFicheiro == 'Protocolo' ? 'Protocolo' : 'Relatorio';
    }

      ordernar(array: Array<any>) {
        return    array.sort(function (valor1, valor2) {
            if (valor1.id > valor2.id) {
                return -1;
            }
            if (valor1.id < valor2.id) {
                return 1;
            }
            return 0;
        });
      }




}
