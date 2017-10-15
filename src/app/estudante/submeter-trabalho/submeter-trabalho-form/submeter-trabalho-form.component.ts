import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

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
      'value':'SAUDE',
      'option':'OPTION'
    },
    {
      'value':'RECURSOS HUMANOS',
      'option':'RECURSOS HUMANOS'
    },
    {
      'value':'ECONOMIA MUNDIAL',
      'option':'ECONOMIA MUNDIAL'
    },
    {
      'value':'DESENHO DE BASE DE DADOS',
      'option':'DESENHO DE BASE DE DADOS'
    },
    {
      'value':'SEGURANCA DE APLICACOES WEB',
      'option':'SEGURANCA DE APLICACOES WEB'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

    submeterTrabalho(formulario:NgForm){
        alert("entramos na submissao");
       if(!formulario){
         alert("nao definido")
       }else{
           alert(formulario.value.file);
       }
    }

}
