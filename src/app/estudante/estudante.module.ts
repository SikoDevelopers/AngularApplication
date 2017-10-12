import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BarraDoTopoModule} from "../barra-do-topo/barra-do-topo.module";

@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoModule
  ],
  declarations: [
    PaginaComponent,
    SidenavComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class EstudanteModule { }
