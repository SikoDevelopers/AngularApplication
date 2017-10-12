import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-do-topo',
  templateUrl: './barra-do-topo.component.html',
  styleUrls: ['./barra-do-topo.component.css']
})
export class BarraDoTopoComponent implements OnInit {
  nomeDaApp : string = "SikoSSP"
  constructor() { }

  optionsSelect: Array<any>;

  ngOnInit() {
    this.optionsSelect = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
  }
}
