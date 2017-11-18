import {Component, Input, ElementRef, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.scss']
})
export class FileInputComponent implements OnInit {
  @Input() textoDaLabel;
  caminhoDoFile: any = "jjjj";
    file1: any;
  constructor() { }


  @Output() eventEmiter = new EventEmitter();

  ngOnInit() {

  }
  
  clicked(){
    console.log("clicked");
  }



    fileChange(event,valor){
        const fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            this.file1 = fileList[0];
            this.caminhoDoFile= "aaaaa";
            alert(this.file1.name);
            alert('entramos ja definimos o value');
            this.eventEmiter.emit({file:this.file1});
        }

    }



}
