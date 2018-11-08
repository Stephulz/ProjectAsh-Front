import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';
import { Genero } from 'src/app/model/genero';

@Component({
  selector: 'app-new-genero',
  templateUrl: './new-genero.component.html',
  styleUrls: ['./new-genero.component.css']
})  
export class NewGeneroComponent implements OnInit {

  private generos = [];

  constructor(
    private generoService:GeneroService,
  ) { }

  ngOnInit() {
    this.buscarGenero();
  }

  model = new Genero("","");
  submitted = false;

  onSubmit(){
    this.submitted = true;
      console.log(this.model);
      this.newGenero(this.model);
      console.log(this.model.nome);
      location.reload();
  }

  get diagnostic() { return JSON.stringify(this.model); }

  newGenero(genero:Genero){
    this.generoService.newGenero(genero).subscribe();
  }

  buscarGenero(){
    this.generoService.buscarGenero((genero)=>{
      this.generos = genero;
      console.log("generos: "+JSON.stringify(this.generos));
    });
  }

  deletarGenero(id:String){
    this.generoService.deleteGenero(id).subscribe();
    location.reload();
    this.buscarGenero();
  }

}
