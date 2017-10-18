import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DocenteComponent} from './docente.component';
import {EventosComponent} from "./conteudo/eventos/eventos.component";
import { MeusSupervisionandosComponent } from './conteudo/meus-supervisionandos/meus-supervisionandos.component'
import { TemasComponent } from './conteudo/temas/temas.component';
import { OponenciaComponent } from './conteudo/oponencia/oponencia.component';

const DOCENTE_ROTAS: Routes = [
    {path: '', component: DocenteComponent,
        children: [
            {path:'docente/supervisandos',component: MeusSupervisionandosComponent},
            {path:'docente/eventos',component: EventosComponent},
            {path:'docente/temas',component: TemasComponent},
            {path:'docente/oponencia',component: OponenciaComponent}
        ],


    },

];

export const DocenteRotas: ModuleWithProviders = RouterModule.forChild(DOCENTE_ROTAS);
