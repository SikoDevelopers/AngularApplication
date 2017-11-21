import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocenteComponent } from './docente.component';
import {BarraDoTopoEstComponent} from "./barra-do-topo-est/barra-do-topo-est.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MDBBootstrapModule} from "angular-bootstrap-md";
import { ConteudoComponent } from './conteudo/conteudo.component';
import { MeusSupervisionandosComponent } from './conteudo/meus-supervisionandos/meus-supervisionandos.component';
import {
    MatPaginatorModule,MatTableModule,
    MatTabsModule
} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ActuaisComponent } from './conteudo/meus-supervisionandos/actuais/actuais.component';

import { SupervisionadosComponent } from './conteudo/meus-supervisionandos/supervisionados/supervisionados.component';
import { TabelaActuaisComponent } from './conteudo/meus-supervisionandos/actuais/tabela-actuais/tabela-actuais.component';
import { OponenciaComponent } from './conteudo/oponencia/oponencia.component';
import { EventosComponent } from './conteudo/eventos/eventos.component';
import { TemasComponent } from './conteudo/temas/temas.component';
import {DocenteRotas} from "./docente.routing";
import {NgProgressModule} from 'ngx-progressbar';
import {PublicoGeralModule} from "../publico-geral/publico-geral.module";
import { TemaComponent } from './conteudo/temas/tema/tema.component';
import { AvatarModule } from "ng2-avatar";
import { TabComponent } from './conteudo/meus-supervisionandos/tab/tab.component';
import { ListaOponenciaComponent } from './conteudo/oponencia/lista-oponencia/lista-oponencia.component';
import { TabelaOponenciasComponent } from './conteudo/oponencia/lista-oponencia/tabela-oponencias/tabela-oponencias.component';
import { SubmeterTemaComponent } from './conteudo/temas/submeter-tema/submeter-tema.component';
import { SubmeterTemaFormComponent } from './conteudo/temas/submeter-tema/submeter-tema-form/submeter-tema-form.component';
import {SelectModule} from "./conteudo/temas/submeter-tema/submeter-tema-form/select/select.module";
import {FormsModule} from "@angular/forms";
import {TemaService} from "../service/tema.service";
import {SolicitacoesComponent} from "./conteudo/solicitacoes/solicitacoes.component";
import { ListaDeSolicitacoesComponent } from './conteudo/solicitacoes/lista-de-solicitacoes/lista-de-solicitacoes.component';
import { SolicitacaoComponent } from './conteudo/solicitacoes/lista-de-solicitacoes/solicitacao/solicitacao.component';
import { ModalResponderSolicitacaoSupervisaoComponent } from './conteudo/solicitacoes/lista-de-solicitacoes/solicitacao/modal-responder-solicitacao-supervisao/modal-responder-solicitacao-supervisao.component';
import { SolicitacoesDetalhesComponent } from './conteudo/solicitacoes/lista-de-solicitacoes/solicitacao/modal-responder-solicitacao-supervisao/solicitacoes-detalhes/solicitacoes-detalhes.component';
import { TabSolicitacoesComponent } from './conteudo/solicitacoes/tab-solicitacoes/tab-solicitacoes.component';

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
      AvatarModule.forRoot(),
      SelectModule,
      FormsModule,
      FormsModule
  ],
  declarations: [
      DocenteComponent,
      BarraDoTopoEstComponent,
      SidenavComponent,
      ConteudoComponent,
      MeusSupervisionandosComponent,
      ActuaisComponent,
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
      SubmeterTemaFormComponent,
      SolicitacoesComponent,
      ListaDeSolicitacoesComponent,
      SolicitacaoComponent,
      ModalResponderSolicitacaoSupervisaoComponent,
      SolicitacoesDetalhesComponent,
      TabSolicitacoesComponent

  ],
    schemas:[NO_ERRORS_SCHEMA],
    providers : [TemaService]
})
export class DocenteModule { }
