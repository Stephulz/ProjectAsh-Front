import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Jogo } from '../model/jogo';

@Injectable({
  providedIn: 'root'
})
export class JogoService {

  constructor(private http:Http) {

   }

   searchJogo(nome:string, callback){
      return this.http.get(`/api/jogos/search?nome=${nome}`)
          .subscribe(response => {
            let respSearchJogo = response.json();
            console.log("SERVICE LOG: "+response);
            callback(respSearchJogo);
          });
   }

   newJogo( generoId:string, jogo:Jogo){
    return this.http.post(`/api/jogos/generos/${generoId}`, jogo)
  }

  buscarJogo(callback){
    return this.http.get(`/api/jogos`)
        .subscribe(response => {
          let respJogo = response.json();
          console.log("SERVICE LOG: "+response);
          callback(respJogo);
    });
  }

  buscarJogoId(id:string, callback){
    return this.http.get(`/api/jogos/${id}`)
    .subscribe(response => {
      let resp = response.json();
      //Callback:
      //tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido,
      // ou quando uma parte de código receber uma resposta de que estava à espera.
      callback(resp); 
    });
  }

  editJogo(id:string, generoId:string, jogo:Jogo){
    return this.http.put(`/api/jogos/${id}/generos/${generoId}`, jogo)
  }

  deleteJogo(id:string){
    return this.http.delete(`/api/jogos/${id}`)
  }

}
