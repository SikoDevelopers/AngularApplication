import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhes-trabalho',
  templateUrl: './detalhes-trabalho.component.html',
  styleUrls: ['./detalhes-trabalho.component.scss']
})
export class DetalhesTrabalhoComponent implements OnInit {
  @Input() trabalho:any;
  constructor() { }

  ngOnInit() {
  }

}
