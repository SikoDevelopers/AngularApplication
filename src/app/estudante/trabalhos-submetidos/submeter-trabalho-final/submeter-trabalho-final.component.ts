import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-submeter-trabalho-final',
    templateUrl: './submeter-trabalho-final.component.html',
    styleUrls: ['./submeter-trabalho-final.component.scss']
})
export class SubmeterTrabalhoFinalComponent implements OnInit {
    labelDoFileChooser:string = "Selecione o documento"
    constructor() { }

    ngOnInit() {
    }

}