import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-conta-form',
  templateUrl: './criar-conta-form.component.html',
  styleUrls: ['./criar-conta-form.component.scss']
})
export class CriarContaFormComponent implements OnInit {
  label: string = "Selecione o Curso";
  opcoes: any = [
    {
      'value': 'INFORMATICA',
      'option': 'INFORMATICA'
    },
    {
      'value': 'ESTATISTICA',
      'option': 'ESTATISTICA'
    },
    {
      'value': 'MATEMATICA',
      'option': 'MATEMATICA'
    },
    {
      'value': 'MATEMATICA',
      'option': 'MATEMATICA'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
