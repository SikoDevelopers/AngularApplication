import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.scss']
})
export class TemaComponent implements OnInit {
  @Input() tema: any;
  @Input() nome: any;
  constructor() { }

  ngOnInit() {
  }

}
