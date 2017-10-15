import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissaoCientificaComponent } from './comissao-cientifica.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { TabelaTrabalhoComponent } from './tabela-trabalho/tabela-trabalho.component';
import { TabTrabalhosComponent } from './tab-trabalhos/tab-trabalhos.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CardTrabalhosComponent } from './conteudo/over-view/card-trabalhos/card-trabalhos.component';
import { CardGraficosComponent } from './conteudo/over-view/card-graficos/card-graficos.component';
import {GraficosModule} from './graficos/graficos.module';
import {GraficoBarrasComponent} from './graficos/grafico-barras/grafico-barras.component';
import {GraficoCircularComponent} from './graficos/grafico-circular/grafico-circular.component';
import { OverViewComponent } from './conteudo/over-view/over-view.component';
import { TrabalhosComponent } from './conteudo/trabalhos/trabalhos.component';
import { SupervisoresComponent } from './conteudo/supervisores/supervisores.component';
import { EventosComponent } from './conteudo/eventos/eventos.component';
import { EstatisticasComponent } from './conteudo/estatisticas/estatisticas.component';

@NgModule({
  imports: [
    CommonModule,
      MDBBootstrapModule.forRoot(),
      GraficosModule

  ],
  declarations: [ComissaoCientificaComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,
      TabelaTrabalhoComponent,
      TabTrabalhosComponent,
      ConteudoComponent,
      CardTrabalhosComponent,
      CardGraficosComponent,
      OverViewComponent,
      TrabalhosComponent,
      SupervisoresComponent,
      EventosComponent,
      EstatisticasComponent,

  ],

    schemas:[NO_ERRORS_SCHEMA]
})
export class ComissaoCientificaModule { }
