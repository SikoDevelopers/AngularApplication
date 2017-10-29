import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes} from "@angular/router";
import {PaginaInicialComponent} from './publico-geral/pagina-inicial/pagina-inicial.component';
import {LoginComponent} from "./publico-geral/login/login.component";
import {PaginaComponent} from "./estudante/pagina/pagina.component";
import {CriarContaComponent} from "./publico-geral/login/criar-conta/criar-conta.component";
import {ComissaoCientificaComponent} from "./comissao-cientifica/comissao-cientifica.component";
import {DocenteComponent} from "./docente/docente.component";
import {ShimmerEfectComponent} from './shimmer-efect/shimmer-efect.component';
import {EstudanteComponent} from "./estudante/estudante.component";


const appRoutes: Routes = [
  {path: '',component: PaginaInicialComponent},
  {path:'login',component:LoginComponent},
  {path:'criar-conta',component:CriarContaComponent},
  {path: 'estudante/:hasJob', component: EstudanteComponent},
  {path:'estudante/documentos-submetidos',component: PaginaComponent},
  {path:'docente',component:DocenteComponent},
    {path:'comissao-cientifica',component:ComissaoCientificaComponent},
    {path:'docente',component:DocenteComponent},
    {path:'shemmer',component:ShimmerEfectComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
