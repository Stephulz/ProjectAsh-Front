import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';
import { JogoService } from 'src/app/services/jogo.service';
import { Genero } from 'src/app/model/genero';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-new-jogo',
  templateUrl: './new-jogo.component.html',
  styleUrls: ['./new-jogo.component.css']
})
export class NewJogoComponent implements OnInit {

  private generos = [];
  private jogos = [];

  constructor(
    private generoService:GeneroService,
    private jogoService:JogoService,
  ) { }

  ngOnInit() {
    this.buscarGenero();
    this.buscarJogo();
  }

  model = new Jogo("","","","","","","","","","");
  submitted = false;
  generoId:string;
  nomeGenero:string;

  onSubmit(){
    this.submitted = true;
      console.log(this.model);
      this.newJogo(this.generoId, this.model);
      //location.reload();
  }

  get diagnostic() { return JSON.stringify(this.model); }

  newJogo(generoId:string,jogo:Jogo){
    this.jogoService.newJogo(generoId, jogo).subscribe();
  }

  buscarGenero(){
    this.generoService.buscarGenero((genero)=>{
      this.generos = genero;
      console.log("GENEROS: "+JSON.stringify(this.generos));
    });
  }

  buscarJogo(){
    this.jogoService.buscarJogo((jogo)=>{
      this.jogos = jogo;
      console.log("JOGOS: "+JSON.stringify(this.jogos));
    });
  }

  loadGenero(generoId:string){
    this.generoId = generoId;
    console.log("GENERO ID: "+this.generoId);
  }

  deletarJogo(jogoId:string){
    this.jogoService.deleteJogo(jogoId).subscribe();
    location.reload();
    console.log("DELETE: "+jogoId);
  }
}
