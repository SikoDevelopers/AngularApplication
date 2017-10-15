import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { GraficoCircularComponent } from './grafico-circular/grafico-circular.component';

@NgModule({
  imports: [
    CommonModule,
      MDBBootstrapModule.forRoot()
  ],
  declarations: [GraficoBarrasComponent, GraficoCircularComponent],

    schemas:[NO_ERRORS_SCHEMA],

    exports: [GraficoCircularComponent, GraficoBarrasComponent]
})
export class GraficosModule { }
