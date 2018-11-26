import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../services/jogo.service';
import { ActivatedRoute} from '@angular/router';
import { GeneroService } from '../../services/genero.service';

@Component({
  selector: 'app-jogo-genero-search',
  templateUrl: './jogo-genero-search.component.html',
  styleUrls: ['./jogo-genero-search.component.css']
})
export class JogoGeneroSearchComponent implements OnInit {
  jogos = [];
  idGenero:string;
  nomeGenero:string;

  constructor(
    private jogoService:JogoService,
    private generoService:GeneroService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.idGenero = this.activeRoute.snapshot.params['generoId'];
    this.searchJogoByGenero(this.idGenero);
    this.searchGeneroById();
  }

  /*
  searchJogo(idGenero:string){
    this.jogoService.searchJogo(idGenero,(jogo)=>{
      this.jogos = jogo.content;
      this.nomeGenero = jogo.content.genero.nome;
      console.log("JOGOS: "+JSON.stringify(this.jogos));
    });
  }*/

  searchGeneroById(){
    this.generoService.buscarGeneroId(this.activeRoute.snapshot.params['generoId'], (genero)=>{
      this.nomeGenero = genero.nome;
      console.log("NOME GENERO: "+this.nomeGenero);
    });
  }

  searchJogoByGenero(generoId:string){
    this.jogoService.searchJogoByGenero(generoId,(jogo)=>{
      this.jogos = jogo.content;
      this.nomeGenero = this.jogos[0].genero.nome
      console.log("JOGOS BY GENERO: "+JSON.stringify(this.jogos));
    });
  }

}
