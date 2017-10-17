import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DocenteComponent} from './docente.component';
const COMISSAO_ROTAS: Routes = [
    {path: '', component: DocenteComponent,
        children: [

        ],


    },

];

export const DocenteRotas: ModuleWithProviders = RouterModule.forChild(COMISSAO_ROTAS);
