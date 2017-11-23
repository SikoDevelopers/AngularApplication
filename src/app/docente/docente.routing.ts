import { RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {DocenteComponent} from './docente.component';
import {EventosComponent} from "./conteudo/eventos/eventos.component";
import { MeusSupervisionandosComponent } from './conteudo/meus-supervisionandos/meus-supervisionandos.component'
import { TemasComponent } from './conteudo/temas/temas.component';
import { OponenciaComponent } from './conteudo/oponencia/oponencia.component';
import {SolicitacoesComponent} from "./conteudo/solicitacoes/solicitacoes.component";
import {SolicitacaoAvaliacaoDetalhesComponent} from "./conteudo/solicitacoes/lista-de-solicitacoes-avaliacao/solicitacao-avaliacao/solicitacao-avaliacao-detalhes/solicitacao-avaliacao-detalhes.component";

const DOCENTE_ROTAS: Routes = [
    {path: '', component: DocenteComponent,
        children: [
            {path:'docente/supervisandos',component: MeusSupervisionandosComponent},
            {path:'docente/eventos',component: EventosComponent},
            {path:'docente/temas',component: TemasComponent},
            {path:'docente/oponencia',component: OponenciaComponent},
            {path:'docente/solicitacoes',component: SolicitacoesComponent },
            {path:'docente/solicitacoes/avaliacao-detalhes',component: SolicitacaoAvaliacaoDetalhesComponent },

        ],


    },

];

export const DocenteRotas: ModuleWithProviders = RouterModule.forChild(DOCENTE_ROTAS);
