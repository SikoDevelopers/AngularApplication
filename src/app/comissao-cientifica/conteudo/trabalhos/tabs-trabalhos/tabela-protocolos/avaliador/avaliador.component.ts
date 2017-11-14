import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AvatarComponent} from 'ng2-avatar';

@Component({
  selector: 'app-avaliador',
  templateUrl: './avaliador.component.html',
  styleUrls: ['./avaliador.component.scss']
})
export class AvaliadorComponent implements OnInit {

    @Input() avaliadorAdicionais: any;
    @Input() avaliador: any;
    @Output() output = new EventEmitter();

  constructor(private avatar: AvatarComponent) { }

  ngOnInit() {
  }



    getFuncaoColor(){
        return this.avatar.background;
    }


    removerParticipante() {
        this.avaliadorAdicionais = null;
        this.output.emit({avaliadorSelecionado: this.avaliadorAdicionais, isAdicionado: false});
    }




}
