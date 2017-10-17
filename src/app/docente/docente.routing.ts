import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DocenteComponent} from './docente.component';
import {EventosComponent} from "./conteudo/eventos/eventos.component";


const DOCENTE_ROTAS: Routes = [
    {path: '', component: DocenteComponent,
        children: [
            {path:'docente/eventos',component: EventosComponent}

        ],


    },

];

export const DocenteRotas: ModuleWithProviders = RouterModule.forChild(DOCENTE_ROTAS);
