import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-meus-supervisionandos',
  templateUrl: './meus-supervisionandos.component.html',
  styleUrls: ['./meus-supervisionandos.component.scss']
})
export class MeusSupervisionandosComponent implements OnInit {
    constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('ul.tabs').tabs();
    });

    $(document).ready(function(){
      $('ul.tabs').tabs('select_tab', 'tab_id');
    });
  }

}
