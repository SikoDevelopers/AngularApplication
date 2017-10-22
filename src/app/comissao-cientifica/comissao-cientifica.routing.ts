


import {OverViewComponent} from './conteudo/over-view/over-view.component';
import {TrabalhosComponent} from './conteudo/trabalhos/trabalhos.component';
import {SupervisoresComponent} from './conteudo/supervisores/supervisores.component';
import {EventosComponent} from './conteudo/eventos/eventos.component';
import {EstatisticasComponent} from './conteudo/estatisticas/estatisticas.component';
import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ComissaoCientificaComponent} from './comissao-cientifica.component';
import {DocentesComponent} from './conteudo/docentes/docentes.component';

const COMISSAO_ROTAS: Routes = [
    {path: '', component: ComissaoCientificaComponent,
        children: [
            {path:'comissao-cientifica/over-view', component:OverViewComponent},
            {path:'comissao-cientifica/trabalhos',component:TrabalhosComponent},
            {path:'comissao-cientifica/supervisores',component:SupervisoresComponent},
            {path:'comissao-cientifica/eventos',component:EventosComponent},
            {path:'comissao-cientifica/estatisticas',component:EstatisticasComponent},
            {path:'comissao-cientifica/docentes',component:DocentesComponent},
        ],
    },

];

export const ComissaoRotas: ModuleWithProviders = RouterModule.forChild(COMISSAO_ROTAS);
