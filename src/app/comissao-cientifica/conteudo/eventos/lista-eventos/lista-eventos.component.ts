import {Component, Input, OnInit} from '@angular/core';
import {EventoService} from '../../../../service/evento.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {

    eventos:any;
    @Input() tipoEvento: any = 'Pre-defesa';
    constructor(private _eventosService: EventoService) { }


    ngOnInit() {
        this.getEventos();
    }

    getEventos(){
        this._eventosService.getEventosTipo(this.tipoEvento,true,6).subscribe(
            resultado => {
                console.log(resultado);
                this.eventos = resultado['eventos'].data;
                },
            error2 => {console.log("Error")},
            () =>{
                console.log("Sucesso ao Carregar eventos");
            }
        );
    }



}
