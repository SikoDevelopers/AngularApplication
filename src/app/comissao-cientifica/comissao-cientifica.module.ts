import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissaoCientificaComponent } from './comissao-cientifica.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";


@NgModule({
  imports: [
    CommonModule,
      MDBBootstrapModule.forRoot()

  ],
  declarations: [ComissaoCientificaComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,


  ],

    schemas:[NO_ERRORS_SCHEMA]
})
export class ComissaoCientificaModule { }
