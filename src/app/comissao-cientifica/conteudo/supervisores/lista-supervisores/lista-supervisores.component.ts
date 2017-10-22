import {Component, Input, OnInit} from '@angular/core';
import {TrabalhoService} from '../../../../service/trabalho.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-lista-supervisores',
  templateUrl: './lista-supervisores.component.html',
  styleUrls: ['./lista-supervisores.component.scss']
})
export class ListaSupervisoresComponent implements OnInit {


  supervisores: any;

  constructor(private trabalhoService: TrabalhoService) { }

  ngOnInit() {
    this.getSupervicores();
  }



  getSupervicores(){
    let result;
    this.trabalhoService.getSupervisores().subscribe(
    (resultado: Response) => {
      result = resultado['supervisores'];
      console.log(result);
    },
        (erros: HttpErrorResponse) =>{
      console.log(erros);
        },
        () => {
          this.supervisores = result;
        }
    );
  }
}
