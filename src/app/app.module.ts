import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { PublicoGeralModule } from './publico-geral/publico-geral.module';
import { AppRoutingModule } from './app-routing.module';
import { EstudanteModule } from "./estudante/estudante.module";
import {LoginModule} from "./publico-geral/login/login.module";
import {SelectModule} from "./select/select.module";
import { FileInputComponent } from './file-input/file-input.component';
import {CursoService} from './service/curso.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, NgForm, NgModel} from '@angular/forms';
import {UserService} from './service/user.service';
import {AutenticacaoService} from './service/autenticacao.service';
import {ComissaoCientificaModule} from "./comissao-cientifica/comissao-cientifica.module";
import {DocenteModule} from "./docente/docente.module";
import {TrabalhoService} from "./service/trabalho.service";


@NgModule({
  declarations: [
    AppComponent,

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
      DocenteModule

  ],
  providers: [CursoService, UserService, AutenticacaoService, TrabalhoService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
