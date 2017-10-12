import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { CriarContaFormComponent } from './criar-conta/criar-conta-form/criar-conta-form.component';
import { BarraDoTopoModule } from '../../barra-do-topo/barra-do-topo.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SelectModule} from "../../select/select.module";

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BarraDoTopoModule,
    SelectModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    CriarContaComponent,
    CriarContaFormComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class LoginModule { }
