import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  @Input() evento: any;
  constructor() { }

  ngOnInit() {
  }


  getDataEvento(dataEvento){
    let data = new Date(dataEvento);
    return data.getDay() +" / "+data.getMonth()+ " / "+ data.getFullYear();
}

}
