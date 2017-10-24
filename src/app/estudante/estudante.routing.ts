
import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {SubmeterTrabalhoComponent} from "./submeter-trabalho/submeter-trabalho.component";
import {TrabalhosSubmetidosComponent} from "./trabalhos-submetidos/trabalhos-submetidos.component";
import {EstudanteComponent} from "./estudante.component";

const ESTUDANTE_ROTAS: Routes = [
    {path: 'estudante', component:EstudanteComponent,
        children: [
            {path:'estudante/submeter-trabalho', component:SubmeterTrabalhoComponent},
            {path:'estudante/trabalhos-submetidos', component:TrabalhosSubmetidosComponent},

        ],
    },

];

export const EstudanteRotas: ModuleWithProviders = RouterModule.forChild(ESTUDANTE_ROTAS);
