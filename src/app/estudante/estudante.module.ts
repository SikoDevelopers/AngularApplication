import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaComponent } from './pagina/pagina.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {BarraDoTopoEstModule} from "./barra-do-topo-est/barra-do-topo-est.module";
import { SubmeterTrabalhoComponent } from './submeter-trabalho/submeter-trabalho.component';
import { TrabalhosSubmetidosComponent } from './trabalhos-submetidos/trabalhos-submetidos.component';
import { SubmeterTrabalhoFormComponent } from './submeter-trabalho/submeter-trabalho-form/submeter-trabalho-form.component';
import {SelectModule} from "../select/select.module";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {FileInputComponent} from "../file-input/file-input.component";
import {SelectSupervisorModule} from "../select-supervisor/select-supervisor.module";
import { EstudanteComponent } from './estudante.component';
import {EstudanteRotas} from "./estudante.routing";
import { SubmeterTrabalhoFinalComponent } from './trabalhos-submetidos/submeter-trabalho-final/submeter-trabalho-final.component';
import { SubmeterTrabalhoFinalFormComponent } from './trabalhos-submetidos/submeter-trabalho-final/submeter-trabalho-final-form/submeter-trabalho-final-form.component';
import { SubmeterProtocoloFormComponent } from './trabalhos-submetidos/submeter-protocolo/submeter-protocolo-form/submeter-protocolo-form.component';
import {SubmeterProtocoloComponent} from "./trabalhos-submetidos/submeter-protocolo/submeter-protocolo.component";
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import {Ng2CompleterModule} from "ng2-completer";
import { CoSpervisorModalComponent } from './co-spervisor-modal/co-spervisor-modal.component';
import { DetalhesFicheiroComponent } from './trabalhos-submetidos/detalhes-ficheiro/detalhes-ficheiro.component';
@NgModule({
  imports: [
    CommonModule,
    BarraDoTopoEstModule,
    SelectModule,
    MDBBootstrapModule.forRoot(),
      SelectSupervisorModule,
      EstudanteRotas,
      Ng2CompleterModule,
  ],
  declarations: [
    PaginaComponent,
    SidenavComponent,
    SubmeterTrabalhoComponent,
    TrabalhosSubmetidosComponent,
    SubmeterTrabalhoFormComponent,
    FileInputComponent,
    EstudanteComponent,
    SubmeterTrabalhoFinalComponent,
    SubmeterTrabalhoFinalFormComponent,
      SubmeterProtocoloComponent,
    SubmeterProtocoloFormComponent,
    AutoCompleteComponent,
    CoSpervisorModalComponent,
    DetalhesFicheiroComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  exports: [ SidenavComponent ]
})
export class EstudanteModule { }
