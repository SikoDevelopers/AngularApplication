import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CriarContaComponent } from './criar-conta/criar-conta.component';
import { CriarContaFormComponent } from './criar-conta/criar-conta-form/criar-conta-form.component';
import { BarraDoTopoModule } from '../../barra-do-topo/barra-do-topo.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    BarraDoTopoModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent,
    CriarContaComponent,
    CriarContaFormComponent]
})
export class LoginModule { }
