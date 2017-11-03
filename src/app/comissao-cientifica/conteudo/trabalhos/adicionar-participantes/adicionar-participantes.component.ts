import {Component, EventEmitter, OnInit, Output, ViewChild, OnDestroy} from '@angular/core';
import {DocenteService} from '../../../../service/docente.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FuncaoService} from '../../../../service/funcao.service';
import {CompleterData, CompleterService} from 'ng2-completer';

@Component({
  selector: 'app-adicionar-participantes',
  templateUrl: './adicionar-participantes.component.html',
  styleUrls: ['./adicionar-participantes.component.scss']
})
export class AdicionarParticipantesComponent implements OnInit, OnDestroy {




  @ViewChild('modalParticipantes') modalParticipante;
  @Output() output = new EventEmitter();

  @Output() outputParticipante = new EventEmitter();
  @Output() outputFuncao = new EventEmitter();

    protected dataServiceParticipante: CompleterData;
    protected dataServiceFuncao: CompleterData;

    protected participante: any;
    protected funcao: any;

    protected listaDocentes = [{}];
    protected listaFuncoes = [{}];

    private funcaoSelecionada = true;
    private participanteSelecionado = true;


    constructor(private docentesService: DocenteService, private funcaoService: FuncaoService, private completerService: CompleterService) {
        this.getDocetes();
        this.getFuncao();
    }



    ngOnInit() {
    this.output.emit(this.modalParticipante);


  }

  salvarParticipantes(selectDocente){

        this.participanteSelecionado =true;
        this.funcaoSelecionada = true;

      this.modalParticipante.hide();
      this.participante.funcao = this.funcao;
      this.participante.area_participacao = null;
      console.log(this.participante);
      this.outputParticipante.emit(this.participante);
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


            this.listaDocentes = docentes;
            this.dataServiceParticipante = this.completerService.local(this.listaDocentes, 'nome', 'nome');
        }
    );
  }


  getFuncao(){
      let funcao = [{designacao: "teste"}];
       this.funcaoService.getFuncao().subscribe(
          (resultado: Response) => {
              funcao = resultado['funcoes'];
              console.log(funcao);
          },
          (erros: HttpErrorResponse) => {
              console.error(erros);
          },
          () => {
              this.listaFuncoes = funcao;
              this.dataServiceFuncao = this.completerService.local(this.listaFuncoes, 'designacao', 'designacao');
          }
      );
  }




    selecionarDocente(selecionado) {
      this.participanteSelecionado = false;
      this.participante = selecionado.originalObject;
    }

    selecionarFuncao(selecionado){
      this.funcaoSelecionada = false;
      this.funcao = selecionado.originalObject;
      this.participante.funcao = this.funcao;
    }

    aberto(evento){
        console.log(evento);
    }

    isEnabledFuncao(){
        return this.participanteSelecionado;
    }

    isEnabledButton(){
        return (this.participanteSelecionado || this.funcaoSelecionada);
    }
    ngOnDestroy(){
      // this.subcreverDocentes.unsubscribe();
      // this.subcreverFuncao.unsubscribe();
    }








}
