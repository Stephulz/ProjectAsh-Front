import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { NewJogoComponent } from './components/new-jogo/new-jogo.component';
import { NewGeneroComponent } from './components/new-genero/new-genero.component';
import { EditGeneroComponent } from './components/edit-genero/edit-genero.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'jogos/new',
        component: NewJogoComponent
    },
    {
        path: 'generos/new',
        component: NewGeneroComponent 
    },
    {
        path: 'generos/edit/:id',
        component: EditGeneroComponent  
    },
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES); 