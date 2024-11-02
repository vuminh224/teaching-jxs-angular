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
  }

  go(){
    //TP9
    console.log(this.selectedPokeId);
  }
  ngOnInit(): void {
    //add q10
    //console.log(this.pokeService.getPokemons());
    //Q11
    this.pokeService.getPokemons().subscribe((data) => {
      //console.log(data.results);

      data.results.forEach((e:any, index: any)=> {
        this.pokes.push(new Pokemon(index, e.name, e.url));
      });
    });
  }
}
