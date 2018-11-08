import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Genero } from '../model/genero';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  constructor(private http:Http) {

   }

   newGenero(genero:Genero){
    return this.http.post(`/api/generos`, genero)
  }

  buscarGenero(callback){
    return this.http.get(`/api/generos`)
        .subscribe(response => {
          let respGenero = response.json();
          console.log("SERVICE LOG: "+response);
          callback(respGenero);
    });
  }

  deleteGenero(id:string){
    return this.http.delete(`/api/generos/${id}`)
  }

  buscarGeneroId(id:string, callback){
    return this.http.get(`/api/generos/${id}`)
    .subscribe(response => {
      //this.tasksId=response.json();
      // this.taskIdName=response.json()[0].taskName;
      // this.taskIdStatus=response.json()[0].status;
      // console.log(this.tasksId);
      // console.log(this.taskIdName);
      // console.log(this.taskIdStatus);
      let resp = response.json();
      //Callback:
      //tipicamente passada como argumento de outra função e/ou chamada quando um evento for acontecido,
      // ou quando uma parte de código receber uma resposta de que estava à espera.
      callback(resp); 
    });
  }

 editGenero(id:string, genero:Genero){
   return this.http.put(`/api/generos/${id}`, genero)
 }

}
