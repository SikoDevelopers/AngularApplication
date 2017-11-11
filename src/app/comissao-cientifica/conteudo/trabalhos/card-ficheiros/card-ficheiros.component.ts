import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-ficheiros',
  templateUrl: './card-ficheiros.component.html',
  styleUrls: ['./card-ficheiros.component.scss']
})
export class CardFicheirosComponent implements OnInit {

  @Input() ficheiro;
  constructor() { }

  ngOnInit() {
  }


    getTipoFicheiro(tipoFicheiro){
      return (tipoFicheiro == 'Protocolo') ? 'Protocolo' : 'Relactorio';
    }

}
