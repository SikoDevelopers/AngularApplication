import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CompleterData, CompleterService} from 'ng2-completer';

@Component({
  selector: 'app-shimmer-efect',
  templateUrl: './shimmer-efect.component.html',
  styleUrls: ['./shimmer-efect.component.scss']
})
export class ShimmerEfectComponent implements OnInit {


    constructor(){}
    dataActual = new Date();

  ngOnInit() {
  }

}
