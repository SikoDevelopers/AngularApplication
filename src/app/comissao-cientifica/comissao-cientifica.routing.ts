


import {OverViewComponent} from './conteudo/over-view/over-view.component';
import {TrabalhosComponent} from './conteudo/trabalhos/trabalhos.component';
import {SupervisoresComponent} from './conteudo/supervisores/supervisores.component';
import {EventosComponent} from './conteudo/eventos/eventos.component';
import {EstatisticasComponent} from './conteudo/estatisticas/estatisticas.component';
import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ComissaoCientificaComponent} from './comissao-cientifica.component';
import {DocentesComponent} from './conteudo/docentes/docentes.component';
import {AuthGuardService} from '../service/auth-guard.service';

const COMISSAO_ROTAS: Routes = [
    {path: '', component: ComissaoCientificaComponent,
        children: [
            {path:'comissao-cientifica/over-view', component:OverViewComponent, canActivate: [AuthGuardService]},
            {path:'comissao-cientifica/trabalhos',component:TrabalhosComponent, canActivate: [AuthGuardService]},
            {path:'comissao-cientifica/supervisores',component:SupervisoresComponent, canActivate: [AuthGuardService]},
            {path:'comissao-cientifica/eventos',component:EventosComponent, canActivate: [AuthGuardService]},
            {path:'comissao-cientifica/estatisticas',component:EstatisticasComponent, canActivate: [AuthGuardService]},
            {path:'comissao-cientifica/docentes',component:DocentesComponent, canActivate: [AuthGuardService]},
        ],
    },

];

export const ComissaoRotas: ModuleWithProviders = RouterModule.forChild(COMISSAO_ROTAS);
