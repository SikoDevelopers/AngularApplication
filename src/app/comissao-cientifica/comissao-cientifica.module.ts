import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissaoCientificaComponent } from './comissao-cientifica.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { TabelaTrabalhoComponent } from './tabela-trabalho/tabela-trabalho.component';
import { TabTrabalhosComponent } from './tab-trabalhos/tab-trabalhos.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CardTrabalhosComponent } from './conteudo/card-trabalhos/card-trabalhos.component';
import { CardGraficosComponent } from './conteudo/card-graficos/card-graficos.component';
import {GraficosModule} from './graficos/graficos.module';
import {GraficoBarrasComponent} from './graficos/grafico-barras/grafico-barras.component';
import {GraficoCircularComponent} from './graficos/grafico-circular/grafico-circular.component';

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

  ],

    schemas:[NO_ERRORS_SCHEMA]
})
export class ComissaoCientificaModule { }
