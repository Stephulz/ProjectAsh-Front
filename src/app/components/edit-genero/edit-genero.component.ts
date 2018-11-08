import { Component, OnInit } from '@angular/core';
import { GeneroService } from 'src/app/services/genero.service';
import { Genero } from 'src/app/model/genero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-genero',
  templateUrl: './edit-genero.component.html',
  styleUrls: ['./edit-genero.component.css']
})
export class EditGeneroComponent implements OnInit {

  constructor(
    private generoService:GeneroService,
    private activeRoute: ActivatedRoute,
    private router:Router,
  ) { }

  model:Genero = new Genero (this.activeRoute.snapshot.params['id'],"");
  submitted = false;

  onSubmit(){
    this.submitted = true;
    console.log(this.model);
    this.editGenero();
    //this.router.navigate(['generos/new',]);
  }


  buscarGeneroId() {
    this.generoService.buscarGeneroId(this.activeRoute.snapshot.params['id'], (genero)=>{
      this.model = new Genero(this.activeRoute.snapshot.params['id'],genero.nome);
      console.log(this.model);
    });
  }

  editGenero(){
    this.generoService.editGenero(this.activeRoute.snapshot.params['id'], this.model).subscribe();
  }

  ngOnInit() {
    this.buscarGeneroId();
    console.log("ROUTE PARAM:"+ this.activeRoute.snapshot.params['id']);
  }

}
