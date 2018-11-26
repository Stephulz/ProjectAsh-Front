import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';
import { JogoService } from 'src/app/services/jogo.service';
import { Jogo } from 'src/app/model/jogo';
import { Router} from '@angular/router';

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
    private router:Router,
  ) {}

  ngOnInit() {
    this.buscarGenero();
    this.buscarJogo();
  }

  model = new Jogo("","","","","","","","","","");
  submitted = false;
  generoId:string;
  nomeGenero:string = "Genero";

  onSubmit(){
    this.submitted = true;
      console.log(this.model);
      this.newJogo(this.generoId, this.model);
      location.reload();
      //this.router.navigate(['/jogos']);
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

  loadGenero(generoId:string, nomeGenero:string){
    this.generoId = generoId;
    this.nomeGenero = nomeGenero;
    console.log("GENERO ID: "+this.generoId+" GENERO NOME: "+this.nomeGenero);
  }

  deletarJogo(jogoId:string){
    this.jogoService.deleteJogo(jogoId).subscribe();
    location.reload();
    //this.buscarJogo();
    console.log("DELETE: "+jogoId);
  }
}
