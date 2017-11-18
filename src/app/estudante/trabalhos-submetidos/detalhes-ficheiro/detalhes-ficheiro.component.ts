import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detalhes-ficheiro',
  templateUrl: './detalhes-ficheiro.component.html',
  styleUrls: ['./detalhes-ficheiro.component.scss']
})
export class DetalhesFicheiroComponent implements OnInit {

  constructor() { }
    @Input() avalicao: any;
  ngOnInit() {
  }

}
