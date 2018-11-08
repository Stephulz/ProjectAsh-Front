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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewJogoComponent,
    NewGeneroComponent,
    EditGeneroComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    routes,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
