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
import {LerMaisTrabalhosComponent} from "./publico-geral/lista-de-trabalhos/trabalho/ler-mais-trabalhos/ler-mais-trabalhos.component";
import {AuthGuardService} from './service/auth-guard.service';

const appRoutes: Routes = [
  {path: '',component: PaginaInicialComponent},
  {path:'login',component:LoginComponent},
  {path:'criar-conta',component:CriarContaComponent},
  {path: 'estudante/:hasJob', component: EstudanteComponent, canActivate: [AuthGuardService]},
  {path:'estudante/documentos-submetidos',component: PaginaComponent, canActivate: [AuthGuardService]},
  {path:'comissao-cientifica',component:ComissaoCientificaComponent, canActivate: [AuthGuardService]},
  {path:'docente',component:DocenteComponent, canActivate: [AuthGuardService]},
  {path:'shemmer',component:ShimmerEfectComponent},
  {path:'trabalho-detalhes', component: LerMaisTrabalhosComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }


