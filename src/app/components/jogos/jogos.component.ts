import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { Jogo } from 'src/app/model/jogo';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent implements OnInit {

  private jogos = [];

  constructor(
    private jogoService:JogoService,
  ) { }

  ngOnInit() {
    this.buscarJogo();
  }

  buscarJogo(){
    this.jogoService.buscarJogo((jogo)=>{
      this.jogos = jogo;
      console.log("JOGOS: "+JSON.stringify(this.jogos));
    });
  }

}
