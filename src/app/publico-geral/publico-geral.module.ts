import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BarraDoTopoModule} from '../barra-do-topo/barra-do-topo.module';
import { ListaDeTrabalhosComponent } from './lista-de-trabalhos/lista-de-trabalhos.component';
import { TrabalhoComponent } from './lista-de-trabalhos/trabalho/trabalho.component';
import {SelectFiltroModule} from "../select-filtro/select-filtro.module";
import {SliderModule} from "../slider/slider.module";
import { ListaDeEventosComponent } from './lista-de-eventos/lista-de-eventos.component';
import { EventoComponent } from './lista-de-eventos/evento/evento.component';
import {NgProgressInterceptor, NgProgressModule} from 'ngx-progressbar';
import {HTTP_INTERCEPTORS} from '@angular/common/http';


@NgModule({
  imports: [
      CommonModule,
      BarraDoTopoModule,
      SelectFiltroModule,
      SliderModule,
      NgProgressModule
  ],
  declarations: [
    PaginaInicialComponent,
    ListaDeTrabalhosComponent,
    TrabalhoComponent,
    ListaDeEventosComponent,
    EventoComponent

  ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }],
  exports:[]
})
export class PublicoGeralModule { }
