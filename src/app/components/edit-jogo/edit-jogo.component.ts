import { Component, OnInit } from '@angular/core';
import { JogoService } from 'src/app/services/jogo.service';
import { GeneroService } from 'src/app/services/genero.service';
import { Jogo } from 'src/app/model/jogo';
import { JogoEdit } from 'src/app/model/jogo-edit';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from '../../model/genero';

@Component({
  selector: 'app-edit-jogo',
  templateUrl: './edit-jogo.component.html',
  styleUrls: ['./edit-jogo.component.css']
})
export class EditJogoComponent implements OnInit {
  
  private generos:Genero[];

  constructor(
    private jogoService:JogoService,
    private generoService:GeneroService,
    private activeRoute: ActivatedRoute,
    private router:Router,
  ) { 
  }

  model:JogoEdit = new JogoEdit (this.activeRoute.snapshot.params['id'],"","","","","","","","","","");
  submitted = false;
  generoId:string;
  nomeGenero:string;

  
  ngOnInit() {
    this.buscarJogoId();
    this.buscarGenero();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }
  
  onSubmit(){
    this.submitted = true;
    console.log(this.model);
    this.editJogo();
  }

  buscarJogoId() {
    this.jogoService.buscarJogoId(this.activeRoute.snapshot.params['id'], (jogo)=>{
      this.model = new JogoEdit(this.activeRoute.snapshot.params['id'], jogo.nome, jogo.desenvolvedora,
      jogo.dataLancamento, jogo.preco, jogo.descricao, jogo.plataforma, jogo.quantJogadores,
      jogo.compatControle, jogo.urlImagem, jogo.genero);
      console.log(this.model);
      this.nomeGenero = jogo.genero.nome;
    });
  }

  
  buscarGenero(){
    this.generoService.buscarGenero((genero)=>{
      this.generos = genero;
      console.log("GENEROS: "+JSON.stringify(this.generos));
    });
  }

  editJogo(){
    this.jogoService.editJogo(this.activeRoute.snapshot.params['id'],this.generoId, this.model).subscribe();
  }

  loadGenero(generoId:string){
    this.generoId = generoId;
    console.log("GENERO ID: "+this.generoId);
  }
}
