import { Component, OnInit, Input } from '@angular/core';
import {SelectService} from "./select.service";

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label: string ;
  @Input() opcoes: any;
  constructor() { }

  ngOnInit() {

  }

}
