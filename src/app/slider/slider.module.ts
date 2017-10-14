import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule
  ],
  declarations: [SliderComponent],
  exports:[SliderComponent]
})
export class SliderModule { }
