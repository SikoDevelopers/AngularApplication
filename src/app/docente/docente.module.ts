import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteComponent } from './docente.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { ConteudoComponent } from './conteudo/conteudo.component';
import { MeusSupervisionandosComponent } from './conteudo/meus-supervisionandos/meus-supervisionandos.component';
import {MatPaginatorModule, MatTab, MatTableModule, MatTabsModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActuaisComponent } from './conteudo/meus-supervisionandos/actuais/actuais.component';
import { SolicitacoesComponent } from './conteudo/meus-supervisionandos/solicitacoes/solicitacoes.component';
import { SupervisionadosComponent } from './conteudo/meus-supervisionandos/supervisionados/supervisionados.component';
import { TabelaActuaisComponent } from './conteudo/meus-supervisionandos/actuais/tabela-actuais/tabela-actuais.component';
import { OponenciaComponent } from './conteudo/oponencia/oponencia.component';
import { EventosComponent } from './conteudo/eventos/eventos.component';
import { TemasComponent } from './conteudo/temas/temas.component';
import {DocenteRotas} from "./docente.routing";
import {NgProgressInterceptor, NgProgressModule} from 'ngx-progressbar';
import {PublicoGeralModule} from "../publico-geral/publico-geral.module";
import { TemaComponent } from './conteudo/temas/tema/tema.component';
import { AvatarModule } from "ng2-avatar";
import { TabComponent } from './conteudo/meus-supervisionandos/tab/tab.component';
import { ListaOponenciaComponent } from './conteudo/oponencia/lista-oponencia/lista-oponencia.component';
import { TabelaOponenciasComponent } from './conteudo/oponencia/lista-oponencia/tabela-oponencias/tabela-oponencias.component';
import { SubmeterTemaComponent } from './conteudo/temas/submeter-tema/submeter-tema.component';
import { SubmeterTemaFormComponent } from './conteudo/temas/submeter-tema/submeter-tema-form/submeter-tema-form.component';

@NgModule({
  imports: [
    CommonModule,

      MDBBootstrapModule.forRoot(),
      MatTabsModule,
      BrowserAnimationsModule,
      MatTableModule,
      MatPaginatorModule,
      DocenteRotas,
      NgProgressModule,
      PublicoGeralModule,
      AvatarModule.forRoot()
  ],
  declarations: [
      DocenteComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,
      ConteudoComponent,
      MeusSupervisionandosComponent,
      ActuaisComponent,
      SolicitacoesComponent,
      SupervisionadosComponent,
      TabelaActuaisComponent,
      OponenciaComponent,
      EventosComponent,
      TemasComponent,
      TemaComponent,
      TabComponent,
      ListaOponenciaComponent,
      TabelaOponenciasComponent,
      SubmeterTemaComponent,
      SubmeterTemaFormComponent

  ],

    schemas:[NO_ERRORS_SCHEMA]
})
export class DocenteModule { }
