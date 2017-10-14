import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-filtro',
  templateUrl: './select-filtro.component.html',
  styleUrls: ['./select-filtro.component.scss']
})
export class SelectFiltroComponent implements OnInit {
  @Input() opcoes: any;

  constructor() { }

  ngOnInit() {
  }

}
