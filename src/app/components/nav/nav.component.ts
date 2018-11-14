import { Component, OnInit } from '@angular/core';
import { JogoSearch } from '../../model/jogo-search';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneroService } from 'src/app/services/genero.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model:JogoSearch = new JogoSearch("");
  private generos = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private generoService:GeneroService,
    private router:Router
  ) { }

  ngOnInit() {
    this.buscarGenero();
  }

  onSubmit(){
    this.redirectTo("jogos/search/"+this.model.nomeJogo);
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }  

  buscarGenero(){
    this.generoService.buscarGenero((genero)=>{
      this.generos = genero;
      console.log("GENEROS: "+JSON.stringify(this.generos));
    });
  }
}
