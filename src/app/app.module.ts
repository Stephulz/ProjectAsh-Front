import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app-routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { NewJogoComponent } from './components/new-jogo/new-jogo.component';
import { NewGeneroComponent } from './components/new-genero/new-genero.component';
import { EditGeneroComponent } from './components/edit-genero/edit-genero.component';
import { EditJogoComponent } from './components/edit-jogo/edit-jogo.component';
import { JogosComponent } from './components/jogos/jogos.component';
import { JogoDetailsComponent } from './components/jogo-details/jogo-details.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewJogoComponent,
    NewGeneroComponent,
    EditGeneroComponent,
    EditJogoComponent,
    JogosComponent,
    JogoDetailsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    routes,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
