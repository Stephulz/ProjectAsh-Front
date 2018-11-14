import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NewJogoComponent } from './components/new-jogo/new-jogo.component';
import { NewGeneroComponent } from './components/new-genero/new-genero.component';
import { EditGeneroComponent } from './components/edit-genero/edit-genero.component';
import { EditJogoComponent } from './components/edit-jogo/edit-jogo.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { JogoDetailsComponent } from './components/jogo-details/jogo-details.component';
import { JogoSearchComponent } from './components/jogo-search/jogo-search.component';
import { JogoGeneroSearchComponent } from './components/jogo-genero-search/jogo-genero-search.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'jogos',
        component: JogosComponent
    },
    {
        path: 'jogos/new',
        component: NewJogoComponent
    },
    {
        path: 'jogos/details/:id',
        component: JogoDetailsComponent
    },
    {
        path: 'jogos/search/:nomeJogo',
        component: JogoSearchComponent
    },
    {
        path: 'jogos/search/generos/:generoId',
        component: JogoGeneroSearchComponent
    },
    {
        path: 'generos/new',
        component: NewGeneroComponent 
    },
    {
        path: 'generos/edit/:id',
        component: EditGeneroComponent  
    },
    {
        path: 'jogos/edit/:id',
        component: EditJogoComponent  
    },
    {
        path: '**',
        component: HomeComponent 
    },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}); 