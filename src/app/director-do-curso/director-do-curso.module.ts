import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorDoCursoComponent } from './director-do-curso.component';
import {BarraDoTopoEstModule} from "./barra-do-topo-est/barra-do-topo-est.module";
import {SidenavComponent} from "./sidenav/sidenav.component";

@NgModule({
  imports: [
      CommonModule,
      BarraDoTopoEstModule
  ],
  declarations: [
      DirectorDoCursoComponent,
      SidenavComponent
  ]
})
export class DirectorDoCursoModule { }
