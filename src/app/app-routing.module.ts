import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes} from "@angular/router";
import {PaginaInicialComponent} from './publico-geral/pagina-inicial/pagina-inicial.component';
import {LoginComponent} from "./publico-geral/login/login.component";
import {PaginaComponent} from "./estudante/pagina/pagina.component";
import {CriarContaComponent} from "./publico-geral/login/criar-conta/criar-conta.component";
import {ComissaoCientificaComponent} from "./comissao-cientifica/comissao-cientifica.component";
import {DocenteComponent} from "./docente/docente.component";
import {OverViewComponent} from './comissao-cientifica/conteudo/over-view/over-view.component';
import {TrabalhosComponent} from './comissao-cientifica/conteudo/trabalhos/trabalhos.component';
import {SupervisoresComponent} from './comissao-cientifica/conteudo/supervisores/supervisores.component';
import {EventosComponent} from './comissao-cientifica/conteudo/eventos/eventos.component';
import {EstatisticasComponent} from './comissao-cientifica/conteudo/estatisticas/estatisticas.component';
import {ShimmerEfectComponent} from './shimmer-efect/shimmer-efect.component';


const appRoutes: Routes = [
  {path: '',component: PaginaInicialComponent},
  {path:'login',component:LoginComponent},
  {path:'criar-conta',component:CriarContaComponent},
  {path: 'estudante/submeter-trabalho', component: PaginaComponent},
  {path:'estudante/documentos-submetidos',component: PaginaComponent},
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
