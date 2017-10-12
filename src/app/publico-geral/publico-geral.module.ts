import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import {BarraDoTopoModule} from '../barra-do-topo/barra-do-topo.module';

@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoModule
  ],
  declarations: [PaginaInicialComponent]
})
export class PublicoGeralModule { }
