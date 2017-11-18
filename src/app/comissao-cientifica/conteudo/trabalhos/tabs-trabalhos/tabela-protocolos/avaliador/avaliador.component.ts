import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AvatarComponent} from 'ng2-avatar';
import {AvaliacaoService} from '../../../../../../service/avaliacao.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.component.html',
  styleUrls: ['./avaliador.component.scss']
})
export class AvaliadorComponent implements OnInit {

    @Input() avaliador: any;
    @Input() ficheiroTrabalho_id: any;
    @Output() output = new EventEmitter();

  constructor(private avatar: AvatarComponent, private avaliacaoService: AvaliacaoService) { }

  ngOnInit() {
  }



    getFuncaoColor(){
        return this.avatar.background;
    }


    removerParticipante() {

        this.avaliacaoService.deleteAvaliacao(this.avaliador.id, {ficheiroTrabalho_id: this.ficheiroTrabalho_id}).subscribe(
            (result)=>{
                if(result['resultado'])
                    this.avaliador = null;
                else
                    alert('Nao foi possivel remover o Avaliador');
            },
            (erros)=> {
                console.log(erros['mensagem']);
            },
            ()=>{
                console.log("Terminado");
                this.output.emit({avaliadorSelecionado: this.avaliador, parecerFinal: false});
            }

        );
    }




}
