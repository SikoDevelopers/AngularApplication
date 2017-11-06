import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CompleterData, CompleterService} from 'ng2-completer';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';
import {EventoService} from '../../../../service/evento.service';
import {Evento} from '../../../../models/Evento.interface';


@Component({
  selector: 'app-criar-eventos-form',
  templateUrl: './criar-eventos-form.component.html',
  styleUrls: ['./criar-eventos-form.component.scss']
})
export class CriarEventosFormComponent implements OnInit {


    @ViewChild('modal') modal: any;
    @Output() output = new EventEmitter();


    dataServiceTrabalho: CompleterData;

    trabalhoSelecionado: boolean = true;
     trabalhos = [{}];

    evento: Evento = new Evento();



  constructor(private trabalhoService: TrabalhoService, private completerService: CompleterService, private eventosService: EventoService) {
      this.getTrabalhos();
  }

  ngOnInit() {

      this.output.emit(this.modal);
  }


    getTrabalhos(){
        let trabalhos = [{nome: "Hele", apelido: 'Hele'}];
        this.trabalhoService.getTrabalho(false,100).subscribe(
            (resultado: Response) => {
                trabalhos = resultado['trabalhos'].data;
                console.log(resultado);
            },
            (erros: HttpErrorResponse) => {
                console.error(erros);
            },
            () => {

                this.trabalhos = trabalhos;
                this.dataServiceTrabalho = this.completerService.local(this.trabalhos, 'titulo', 'titulo');
                console.log('Trabalhos caregados com sucesso');
            }
        );
    }



    selecionarTrabalho(selecionado) {
        this.trabalhoSelecionado = false;
        this.evento.trabalho = selecionado.originalObject;
    }

    salvarEvento(evento){

        this.eventosService.saveEvento(this.evento).subscribe(
            (resultado: Response) =>{

                if(resultado['evento'] && resultado['trabalho']){
                    alert('Evento criado com sucesso');
                }

                console.log(resultado);
            },
            (erros: HttpErrorResponse) =>{
                console.log(erros);
            },
            ()=>{
                this.evento = new Evento();
            }
        );

    }


    setCategorias_id(categoria_id){
        this.evento = new Evento();
        this.evento.categorias_eventos_id = categoria_id;
    }


}
