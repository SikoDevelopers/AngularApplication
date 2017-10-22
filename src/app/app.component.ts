import { Component } from '@angular/core';
import {Token} from './models/Token';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  myControl: FormControl = new FormControl();
  constructor(){
  }

}
