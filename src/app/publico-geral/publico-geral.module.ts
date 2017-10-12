import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { BarraDoTopoModule} from '../barra-do-topo/barra-do-topo.module';
import { ListaDeTrabalhosComponent } from './lista-de-trabalhos/lista-de-trabalhos.component';
import { TrabalhoComponent } from './lista-de-trabalhos/trabalho/trabalho.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoModule
  ],
  declarations: [
    PaginaInicialComponent,
    ListaDeTrabalhosComponent,
    TrabalhoComponent,
    LoginComponent
  ]
})
export class PublicoGeralModule { }
