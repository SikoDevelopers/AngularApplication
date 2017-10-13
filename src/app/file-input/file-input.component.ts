import {Component, Input, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @ViewChild('label') labelTeste: ElementRef;
  nomeDoElemento: any;
  constructor() { }

  ngOnInit() {

  }
  clicked(){
    console.log("clicked");
  }

  mudou(valor){
    this.nomeDoElemento = valor;
    console.log(valor);
    this.ngOnInit();
  }
}
