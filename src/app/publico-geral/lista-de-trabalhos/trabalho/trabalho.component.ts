import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.scss']
})
export class TrabalhoComponent implements OnInit {
  @Input() trabalho: any;
  constructor() { }

  ngOnInit() {
  }

  setLocalValue(valor){
    localStorage.setItem('id-trabalho',valor);
    //window.location.href = 'trabalho-detalhes';
  }

}
