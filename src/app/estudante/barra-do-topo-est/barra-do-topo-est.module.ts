import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraDoTopoEstComponent } from './barra-do-topo-est.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SidenavComponent} from "../sidenav/sidenav.component";


@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [BarraDoTopoEstComponent],
  exports: [BarraDoTopoEstComponent],
  schemas:[NO_ERRORS_SCHEMA]
})
export class BarraDoTopoEstModule { }
