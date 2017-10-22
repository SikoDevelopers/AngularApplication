import { Component, OnInit,Input, ViewChild } from '@angular/core';
import {TemaService} from "../../../service/tema.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {SubmeterTemaComponent} from "./submeter-tema/submeter-tema.component";
@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.scss']
})
export class TemasComponent implements OnInit {
  temas : any;
  @Input() modal: any;
  animal: string;
  name: string;
  constructor(private _temaSevice: TemaService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getTemas();
  }

  getTemas(){
    this._temaSevice.getTema().subscribe(
        resultado => { this.temas = resultado['tema']},
        error2 => {console.log("Error ao carregar "+error2)},
        () =>{
          console.log("Sucesso ao Carregar Temas");
        }
    );
  }

  getModal(evento){
    this.modal = evento;

  }

  onMostrarModal(){
    this.modal.show();
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(SubmeterTemaComponent, {
      width: '250px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
