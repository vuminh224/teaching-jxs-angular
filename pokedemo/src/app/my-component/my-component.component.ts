import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';
import {PokeAPIServiceService} from '../poke-apiservice.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent implements OnInit {
  id: string ='';
  selectedPokeId: string ="";
  searchPokeName: string ="";
  //Q5
  // pokes: type list Pokemon avec une liste vide
  pokes : Pokemon[] = [];
  constructor(private pokeService : PokeAPIServiceService) {
    this.pokes.push(new Pokemon(0,'bulbasaur'));

    this.pokes.push(new Pokemon(1,'ivysaur'));
    this.pokes.push(new Pokemon(2,'venusaur'));
    this.pokes.push(new Pokemon(3,'charmander'));
    this.pokes.push(new Pokemon(4,'charmeleon'));


  }

  go(){
    //TP9
    console.log(this.selectedPokeId);
  }
  ngOnInit(): void {
    //add q10
    this.pokeService.getPokemons();
  }
}
