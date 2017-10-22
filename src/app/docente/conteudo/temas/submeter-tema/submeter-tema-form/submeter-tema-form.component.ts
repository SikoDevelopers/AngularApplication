import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-submeter-tema-form',
  templateUrl: './submeter-tema-form.component.html',
  styleUrls: ['./submeter-tema-form.component.scss']
})
export class SubmeterTemaFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  options = [
    'One',
    'Two',
    'Three'
  ];

}
