import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PublicoGeralModule } from './publico-geral/publico-geral.module';
import { AppRoutingModule } from './app-routing.module';
import { EstudanteModule } from "./estudante/estudante.module";
import {LoginModule} from "./publico-geral/login/login.module";
import {SelectModule} from "./select/select.module";
import {CursoService} from './service/curso.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from './service/user.service';
import {AutenticacaoService} from './service/autenticacao.service';
import {ComissaoCientificaModule} from "./comissao-cientifica/comissao-cientifica.module";
import {DocenteModule} from "./docente/docente.module";
import {TrabalhoService} from "./service/trabalho.service";
import {AreaService} from "./service/area.service";
import {EventoService} from "./service/evento.service";
import { ShimmerEfectComponent } from './shimmer-efect/shimmer-efect.component';
import {SupervisorExternoService} from "./service/supervisor-externo.service";
import {DocenteAreaService} from "./service/docente-area.service";
import {DocenteService} from "./service/docente.service";
import {NgProgressInterceptor, NgProgressModule} from 'ngx-progressbar';
import {FuncaoService} from './service/funcao.service';
import {Ng2CompleterModule} from 'ng2-completer';
import {FicheirosTrabalhoService} from "./service/ficheiros-trabalho.service";
import {EstudanteService} from "./service/estudante.service";
import {FicheiroTrabalhoEstadoFicheiroService} from "./service/ficheiro-trabalho-estado-ficheiro.service";
import {TemaService} from "./service/tema.service";
import {MatAutocompleteModule, MatFormFieldControl, MatInputModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DatepickerModule } from 'angular2-material-datepicker'
import {AuthService} from './service/auth.service';
import {AuthGuardService} from './service/auth-guard.service';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';


@NgModule({
  declarations: [
    AppComponent,
    ShimmerEfectComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    PublicoGeralModule,
    EstudanteModule,
    SelectModule,
    HttpClientModule,
    FormsModule,
     ComissaoCientificaModule,
      DocenteModule,
    NgProgressModule,

      Ng2CompleterModule,
      // Ng2CompleterModule,
      DatepickerModule

  ],

  providers: [
      CursoService,
      UserService,
      AutenticacaoService,
      TrabalhoService,
      AreaService,
      EventoService,
      SupervisorExternoService,
      DocenteAreaService,
      DocenteService,
      TrabalhoService,
      FuncaoService,
      FicheirosTrabalhoService,
      EstudanteService,
      FicheiroTrabalhoEstadoFicheiroService,
      JwtHelperService,
      AuthService,
      AuthGuardService,
      {provide: JWT_OPTIONS, useValue: {}},
    ],

  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
