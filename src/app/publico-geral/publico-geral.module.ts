import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BarraDoTopoModule} from '../barra-do-topo/barra-do-topo.module';
import { ListaDeTrabalhosComponent } from './lista-de-trabalhos/lista-de-trabalhos.component';
import { TrabalhoComponent } from './lista-de-trabalhos/trabalho/trabalho.component';
import {SelectModule} from "../select/select.module";
import {SelectFiltroModule} from "../select-filtro/select-filtro.module";
import {SliderModule} from "../slider/slider.module";


@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoModule,
    SelectFiltroModule,
    SliderModule
  ],
  declarations: [
    PaginaInicialComponent,
    ListaDeTrabalhosComponent,
    TrabalhoComponent

  ]
})
export class PublicoGeralModule { }
