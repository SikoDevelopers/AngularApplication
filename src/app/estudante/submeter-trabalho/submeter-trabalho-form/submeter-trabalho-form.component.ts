import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {TrabalhoService} from "../../../service/trabalho.service";

@Component({
  selector: 'app-submeter-trabalho-form',
  templateUrl: './submeter-trabalho-form.component.html',
  styleUrls: ['./submeter-trabalho-form.component.scss']
})
export class SubmeterTrabalhoFormComponent implements OnInit {
  label: string = "Seleccione a area tematica";
  labelDoFileChooser = "Seleccionar Documento";
    file1: any;
    formData1: any;

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
  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit() {
  }


    fileChange(event){
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.file1 = fileList[0];
            this.formData1 = new FormData();
            this.formData1.append('uploadFile' , this.file1,  this.file1.name);


        }
    }

    submeter(formulario: NgForm){

        if (!formulario){
            alert('empty form');
        }else{
            alert( this.file1);

            // this.formData1.append('uploadFile', this.file1, this.file1.name);
            this.trabalhoService.saveTrabalho(this.formData1).subscribe(
                resul => {
                    alert(resul['file']);
                    // alert(resul['estudantes']);
                }
            );

        }

    }

}
