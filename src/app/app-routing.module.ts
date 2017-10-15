import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes} from "@angular/router";
import {PaginaInicialComponent} from './publico-geral/pagina-inicial/pagina-inicial.component';
import {LoginComponent} from "./publico-geral/login/login.component";
import {PaginaComponent} from "./estudante/pagina/pagina.component";
import {CriarContaComponent} from "./publico-geral/login/criar-conta/criar-conta.component";
import {ComissaoCientificaComponent} from "./comissao-cientifica/comissao-cientifica.component";
import {DocenteComponent} from "./docente/docente.component";


const appRoutes: Routes = [
  {path: '',component: PaginaInicialComponent},
  {path:'login',component:LoginComponent},
  {path:'criar-conta',component:CriarContaComponent},
  {path: 'estudante/submeter-trabalho', component: PaginaComponent},
  {path:'estudante/documentos-submetidos',component: PaginaComponent},
    {path:'comissao-cientifica',component:ComissaoCientificaComponent},
    {path:'docente',component:DocenteComponent},

    {path:'comissao-cientifica/over-view',component:ComissaoCientificaComponent},
    {path:'comissao-cientifica/trabalhos',component:ComissaoCientificaComponent},
    {path:'comissao-cientifica/supervisores',component:ComissaoCientificaComponent},
    {path:'comissao-cientifica/eventos',component:ComissaoCientificaComponent},
    {path:'comissao-cientifica/estatisticas',component:ComissaoCientificaComponent},

];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
