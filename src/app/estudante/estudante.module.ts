import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BarraDoTopoEstModule} from "./barra-do-topo-est/barra-do-topo-est.module";

@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoEstModule
  ],
  declarations: [
    PaginaComponent,
    SidenavComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class EstudanteModule { }
