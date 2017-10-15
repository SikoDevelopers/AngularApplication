import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submeter-trabalho-form',
  templateUrl: './submeter-trabalho-form.component.html',
  styleUrls: ['./submeter-trabalho-form.component.scss']
})
export class SubmeterTrabalhoFormComponent implements OnInit {
  label: string = "Seleccione a area tematica";
  labelDoFileChooser = "Seleccionar Documento"
  opcoes: any = [
    {
      'designacao':'SAUDE',
      'id':'OPTION'
    },
    {
      'designacao':'RECURSOS HUMANOS',
      'id':'RECURSOS HUMANOS'
    },
    {
      'designacao':'ECONOMIA MUNDIAL',
      'id':'ECONOMIA MUNDIAL'
    },
    {
      'designacao':'DESENHO DE BASE DE DADOS',
      'id':'DESENHO DE BASE DE DADOS'
    },
    {
      'designacao':'SEGURANCA DE APLICACOES WEB',
      'id':'SEGURANCA DE APLICACOES WEB'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
