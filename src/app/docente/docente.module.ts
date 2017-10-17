import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteComponent } from './docente.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { ConteudoComponent } from './conteudo/conteudo.component';
import { MeusSupervisionandosComponent } from './conteudo/meus-supervisionandos/meus-supervisionandos.component';
import {MatTab, MatTabsModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

      MDBBootstrapModule.forRoot(),
  ],
  declarations: [DocenteComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,
      ConteudoComponent,
      MeusSupervisionandosComponent
  ],

    schemas:[NO_ERRORS_SCHEMA]
})
export class DocenteModule { }
