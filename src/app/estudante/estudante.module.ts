import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BarraDoTopoEstModule} from "./barra-do-topo-est/barra-do-topo-est.module";
import { SubmeterTrabalhoComponent } from './submeter-trabalho/submeter-trabalho.component';
import { TrabalhosSubmetidosComponent } from './trabalhos-submetidos/trabalhos-submetidos.component';
import { SubmeterTrabalhoFormComponent } from './submeter-trabalho/submeter-trabalho-form/submeter-trabalho-form.component';

@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoEstModule
  ],
  declarations: [
    PaginaComponent,
    SidenavComponent,
    SubmeterTrabalhoComponent,
    TrabalhosSubmetidosComponent,
    SubmeterTrabalhoFormComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [ SidenavComponent ]
})
export class EstudanteModule { }
