import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from "../../../service/area.service";

@Component({
  selector: 'app-submeter-trabalho-form',
  templateUrl: './submeter-trabalho-form.component.html',
  styleUrls: ['./submeter-trabalho-form.component.scss']
})
export class SubmeterTrabalhoFormComponent implements OnInit {
  label: string = "Seleccione a area tematica";
  labelDoFileChooser = "Seleccionar Documento";
  file;
  opcoes: any = [
    {
      'id':'SAUDE',
      'designacao':'OPTION'
    },
    {
      'id':'RECURSOS HUMANOS',
      'designacao':'RECURSOS HUMANOS'
    },
    {
      'id':'ECONOMIA MUNDIAL',
      'designacao':'ECONOMIA MUNDIAL'
    },
    {
      'id':'DESENHO DE BASE DE DADOS',
      'designacao':'DESENHO DE BASE DE DADOS'
    },
    {
      'id':'SEGURANCA DE APLICACOES WEB',
      'designacao':'SEGURANCA DE APLICACOES WEB'
    },
  ];
  constructor(private _areas:AreaService) { }

  ngOnInit() {
    this.getCursos();
  }
  getCursos(){
    this._areas.getArea().subscribe(
        resultado => { this.opcoes = resultado['areas'];},
        error2 => {console.log("Error")},
        () =>{
          console.log("Sucesso");
        }
    );
  }
submeter(){
    alert(this.file);
}

    atribuirValor(evento){

      this.file = evento.file;
      console.log(this.file);
    }

}
