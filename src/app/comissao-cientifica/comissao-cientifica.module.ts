import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComissaoCientificaComponent } from './comissao-cientifica.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { TabelaTrabalhoComponent } from './conteudo/over-view/tabela-trabalho/tabela-trabalho.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { CardTrabalhosComponent } from './conteudo/over-view/card-trabalhos/card-trabalhos.component';
import { CardGraficosComponent } from './conteudo/over-view/card-graficos/card-graficos.component';
import {GraficosModule} from './graficos/graficos.module';
import { OverViewComponent } from './conteudo/over-view/over-view.component';
import { TrabalhosComponent } from './conteudo/trabalhos/trabalhos.component';
import { SupervisoresComponent } from './conteudo/supervisores/supervisores.component';
import { EventosComponent } from './conteudo/eventos/eventos.component';
import { EstatisticasComponent } from './conteudo/estatisticas/estatisticas.component';
import {ComissaoRotas} from './comissao-cientifica.routing';
import {RouterModule} from '@angular/router';
import {TrabalhoService} from '../service/trabalho.service';
import {NgProgressInterceptor, NgProgressModule} from 'ngx-progressbar';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { TrabalhosDetalhesComponent } from './conteudo/trabalhos/trabalhos-detalhes/trabalhos-detalhes.component';
import {ProcessoSubmissaoService} from '../service/processo-submissao.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule, MatTabsModule} from '@angular/material';
import { CardFicheirosComponent } from './conteudo/trabalhos/card-ficheiros/card-ficheiros.component';
import { ParticipanteComponent } from './conteudo/trabalhos/participante/participante.component';
import {AvatarComponent, AvatarModule} from 'ng2-avatar';
import { TabelaTrabalhosCompletoComponent } from './conteudo/trabalhos/tabela-trabalhos-completo/tabela-trabalhos-completo.component';

@NgModule({
  imports: [
    CommonModule,
      MDBBootstrapModule.forRoot(),
      GraficosModule,
      ComissaoRotas,
      NgProgressModule,
      MatTabsModule,
      BrowserAnimationsModule,
      MatPaginatorModule,
      AvatarModule.forRoot()

  ],
  declarations: [
      ComissaoCientificaComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,
      TabelaTrabalhoComponent,
      ConteudoComponent,
      CardTrabalhosComponent,
      CardGraficosComponent,
      OverViewComponent,
      TrabalhosComponent,
      SupervisoresComponent,
      EventosComponent,
      EstatisticasComponent,
      TrabalhosDetalhesComponent,
      CardFicheirosComponent,
      ParticipanteComponent,
      TabelaTrabalhosCompletoComponent,

  ],

    providers: [AvatarComponent,TrabalhoService, ProcessoSubmissaoService, { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }],
    schemas:[NO_ERRORS_SCHEMA],
    exports:[RouterModule]
})
export class ComissaoCientificaModule { }
