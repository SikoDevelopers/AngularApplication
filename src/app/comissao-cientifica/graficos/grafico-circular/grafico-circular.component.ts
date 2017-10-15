import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-circular',
  templateUrl: './grafico-circular.component.html',
  styleUrls: ['./grafico-circular.component.scss']
})
export class GraficoCircularComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



    public chartType:string = 'pie';

    public chartData:Array<any> = [100, 50, 100];

    public chartLabels:Array<any> = ['Red', 'Green', 'Yellow'];

    public chartColors:Array<any> = [{
        hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
        hoverBorderWidth: 0,
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5","#616774"]
    }];

    public chartOptions:any = {
        responsive: true
    };

    public chartClicked(e: any): void {

    }

    public chartHovered(e: any): void {

    }

}
