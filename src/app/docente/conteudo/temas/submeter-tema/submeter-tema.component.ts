import { Component, OnInit, ViewChild, Output, EventEmitter, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-submeter-tema',
  templateUrl: './submeter-tema.component.html',
  styleUrls: ['./submeter-tema.component.scss']
})
export class SubmeterTemaComponent implements OnInit {

  @ViewChild('modal') modal;
  @Output() output = new EventEmitter();

  constructor(
  ) { }


  ngOnInit() {
    this.output.emit(this.modal);
  }



  onNoClick(): void {
   // this.dialogRef.close();
  }

}
