import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-jogo-search',
  templateUrl: './jogo-search.component.html',
  styleUrls: ['./jogo-search.component.css']
})
export class JogoSearchComponent implements OnInit {

  jogos = [];
  nomeJogo:string;
  init:boolean;

  constructor(
    private jogoService:JogoService,
    private activeRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    this.nomeJogo = this.activeRoute.snapshot.params['nomeJogo'];
    this.searchJogo(this.nomeJogo);
  }

  searchJogo(nomeJogo:string){
    this.jogoService.searchJogo(nomeJogo,(jogo)=>{
      this.jogos = jogo.content;
      console.log("JOGOS: "+JSON.stringify(this.jogos));
    });
  }
}
