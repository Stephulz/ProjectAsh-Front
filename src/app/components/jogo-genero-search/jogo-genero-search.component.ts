import { Component, OnInit } from '@angular/core';
import { JogoService } from '../../services/jogo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jogo-genero-search',
  templateUrl: './jogo-genero-search.component.html',
  styleUrls: ['./jogo-genero-search.component.css']
})
export class JogoGeneroSearchComponent implements OnInit {
  jogos = [];
  nomeJogo:string;
  nomeGenero:string;

  constructor(
    private jogoService:JogoService,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.nomeJogo = this.activeRoute.snapshot.params['generoId'];
    this.searchJogo(this.nomeJogo);
  }

  searchJogo(nomeJogo:string){
    this.jogoService.searchJogo(nomeJogo,(jogo)=>{
      this.jogos = jogo.content;
      this.nomeGenero = jogo.content.genero.nome;
      console.log("JOGOS: "+JSON.stringify(this.jogos));
    });
  }

}
