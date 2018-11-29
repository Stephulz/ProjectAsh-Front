import { Component, OnInit } from '@angular/core';
import { faUser, faPlay, faGamepad, 
  faIndustry, faCalendarAlt, 
  faGripHorizontal, faDollarSign}from '@fortawesome/free-solid-svg-icons';
  import { JogoService } from 'src/app/services/jogo.service';
  import { GeneroService } from 'src/app/services/genero.service';
  import { Jogo } from 'src/app/model/jogo';
  import { JogoEdit } from 'src/app/model/jogo-edit';
  import { ActivatedRoute, Router } from '@angular/router';
  import { Genero } from '../../model/genero';

@Component({
  selector: 'app-jogo-details',
  templateUrl: './jogo-details.component.html',
  styleUrls: ['./jogo-details.component.css']
})
export class JogoDetailsComponent implements OnInit {

  faUser = faUser;
  faPlay = faPlay;
  faGamepad = faGamepad;
  faIndustry = faIndustry;
  faCalendarAlt = faCalendarAlt;
  faGripHorizontal = faGripHorizontal;
  faDollarSign = faDollarSign;

  constructor(
    private jogoService:JogoService,
    private generoService:GeneroService,
    private activeRoute: ActivatedRoute,
    private router:Router
  ) { }

  idGenero:string;
  nomeGenero:string;
  nomeJogo:string;
  jogo:Jogo;

  ngOnInit() {
    this.buscarJogoId();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }

  buscarJogoId() {
    this.jogoService.buscarJogoId(this.activeRoute.snapshot.params['id'], (jogo)=>{
      this.idGenero = jogo.genero.id;
      this.nomeGenero = jogo.genero.nome;
      this.nomeJogo = jogo.nome;
      this.jogo = jogo;
      console.log(jogo);
    });
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }  

  clickGenero(generoId:string){
    this.redirectTo("jogos/search/generos/"+generoId);
  }

}
