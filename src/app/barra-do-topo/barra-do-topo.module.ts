import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDoTopoComponent } from './barra-do-topo.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [BarraDoTopoComponent],
  exports: [BarraDoTopoComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class BarraDoTopoModule { }
