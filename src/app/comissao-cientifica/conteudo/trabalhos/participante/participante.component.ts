import { Component, OnInit, Input } from '@angular/core';
import {AvatarComponent} from 'ng2-avatar';

@Component({
  selector: 'app-participante',
  templateUrl: './participante.component.html',
  styleUrls: ['./participante.component.scss']
})
export class ParticipanteComponent implements OnInit {


    @Input()docentes: any;



  constructor(private avatar: AvatarComponent) { }

  ngOnInit() {
  }



  getFuncaoColor(){
    return this.avatar.background;
  }



}
