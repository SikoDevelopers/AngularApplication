import {Component, Input, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Input() textoDaLabel = "bla bla bla"
  caminhoDoFile: any;
  constructor() { }

  ngOnInit() {

  }
  clicked(){
    console.log("clicked");
  }

  onChangeSelectedFile(valor){
    this.caminhoDoFile = valor;
    console.log(this.caminhoDoFile);
  }
  
}
