import { Component, OnInit } from '@angular/core';
import {SelectService} from "./select.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  label: string = "Provincias";
  opcoes;
  constructor(private _selectService: SelectService) { }

  ngOnInit() {
    this.opcoes = this._selectService.getOpcoes();
  }

}
