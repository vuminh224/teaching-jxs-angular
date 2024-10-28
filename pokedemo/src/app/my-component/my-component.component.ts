import { Component, OnInit } from '@angular/core';
import {Pokemon} from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css'
})
export class MyComponentComponent implements OnInit {
  id: string ='';
  selectedPokeId: string ="";
  //Q5
  // pokes: type list Pokemon avec une liste vide
  pokes : Pokemon[] = [];
  constructor() {
    this.pokes.push(new Pokemon(0,'bulbasaur'));

    this.pokes.push(new Pokemon(1,'ivysaur'));
    this.pokes.push(new Pokemon(2,'venusaur'));
    this.pokes.push(new Pokemon(3,'charmander'));
    this.pokes.push(new Pokemon(4,'charmeleon'));


  }
  ngOnInit(): void {}
}
