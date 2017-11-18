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
import { TabelaTrabalhosCompletoComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-trabalhos-completo/tabela-trabalhos-completo.component';
import { TabsTrabalhosComponent } from './conteudo/trabalhos/tabs-trabalhos/tabs-trabalhos.component';
import { TabelaProtocolosComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-protocolos/tabela-protocolos.component';
import { TabelaTrabalhosApenasComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-trabalhos-apenas/tabela-trabalhos-apenas.component';
import { ListaSupervisoresComponent } from './conteudo/supervisores/lista-supervisores/lista-supervisores.component';
import { DocentesComponent } from './conteudo/docentes/docentes.component';
import { ListaDocentesComponent } from './conteudo/docentes/lista-docentes/lista-docentes.component';
import { DetalhesDocentesComponent } from './conteudo/docentes/detalhes-docentes/detalhes-docentes.component';
import { AdicionarDocentesFormComponent } from './conteudo/docentes/adicionar-docentes-form/adicionar-docentes-form.component';
import {FormsModule, NgModel} from '@angular/forms';
import { CriarEventosFormComponent } from './conteudo/eventos/criar-eventos-form/criar-eventos-form.component';
import { ListaEventosComponent } from './conteudo/eventos/lista-eventos/lista-eventos.component';
import { EditarEventosComponent } from './conteudo/eventos/editar-eventos/editar-eventos.component';
import { EventoComponent } from './conteudo/eventos/evento/evento.component';
import { DatepickerModule } from 'angular2-material-datepicker';
import {Ng2CompleterModule} from 'ng2-completer';
import {AdicionarParticipantesComponent} from './conteudo/trabalhos/adicionar-participantes/adicionar-participantes.component';
import { DialogProtocolosComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-protocolos/dialog-protocolos/dialog-protocolos.component';
import {GrauAcademicoService} from '../service/grau-academico.service';
import { DialogTrabalhosCompletosComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-trabalhos-completo/dialog-trabalhos-completos/dialog-trabalhos-completos.component';
import { AdicoinarAvaliadoresComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-protocolos/adicoinar-avaliadores/adicoinar-avaliadores.component';
import {AvaliacaoService} from '../service/avaliacao.service';
import { AvaliadorComponent } from './conteudo/trabalhos/tabs-trabalhos/tabela-protocolos/avaliador/avaliador.component';
import {FicheirosService} from '../service/ficheiros.service';

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
      AvatarModule.forRoot(),
      FormsModule,
      Ng2CompleterModule,
      DatepickerModule,
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
      TabsTrabalhosComponent,
      TabelaProtocolosComponent,
      TabelaTrabalhosApenasComponent,
      ListaSupervisoresComponent,
      DocentesComponent,
      ListaDocentesComponent,
      DetalhesDocentesComponent,
      AdicionarDocentesFormComponent,
      CriarEventosFormComponent,
      ListaEventosComponent,
      EditarEventosComponent,
      EventoComponent,
      AdicionarParticipantesComponent,
      DialogProtocolosComponent,
      DialogTrabalhosCompletosComponent,
      AdicoinarAvaliadoresComponent,
      AvaliadorComponent

],

providers: [FicheirosService, AvaliacaoService, AvatarComponent, GrauAcademicoService, TrabalhoService, ProcessoSubmissaoService, { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }],
    schemas:[NO_ERRORS_SCHEMA],
    exports:[RouterModule]
})
export class ComissaoCientificaModule { }
