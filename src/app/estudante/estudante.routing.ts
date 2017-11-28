
import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SubmeterTrabalhoComponent} from "./submeter-trabalho/submeter-trabalho.component";
import {TrabalhosSubmetidosComponent} from "./trabalhos-submetidos/trabalhos-submetidos.component";
import {EstudanteComponent} from "./estudante.component";
import {AuthGuardService} from '../service/auth-guard.service';

const ESTUDANTE_ROTAS: Routes = [
    {path: '', component:EstudanteComponent,
        children: [
            {path:'estudante/submeter-trabalho', component:SubmeterTrabalhoComponent, canActivate: [AuthGuardService]},
            {path:'estudante/trabalhos-submetidos', component:TrabalhosSubmetidosComponent, canActivate: [AuthGuardService]},

        ],
    },

];

export const EstudanteRotas: ModuleWithProviders = RouterModule.forChild(ESTUDANTE_ROTAS);
