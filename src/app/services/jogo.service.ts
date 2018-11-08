import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http:Http) {

   }

   newJogo( generoId:string, jogo:Jogo){
    return this.http.post(`/api/jogos/generos/${generoId}`, jogo)
  }
}
