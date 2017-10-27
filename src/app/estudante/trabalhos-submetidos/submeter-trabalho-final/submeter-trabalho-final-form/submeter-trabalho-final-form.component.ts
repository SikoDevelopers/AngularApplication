import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submeter-trabalho-final-form',
  templateUrl: './submeter-trabalho-final-form.component.html',
  styleUrls: ['./submeter-trabalho-final-form.component.scss']
})
export class SubmeterTrabalhoFinalFormComponent implements OnInit {
  labelDoFileChooser:string = "Selecione o documento"
  constructor() { }

  ngOnInit() {
  }

}
