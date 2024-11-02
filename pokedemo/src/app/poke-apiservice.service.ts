import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// https://angular.fr/http/client
// Implement http
@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) { }

  getPokemons(){
     this.http.get('https://pokeapi.co/api/v2/pokemon').subscribe((data) =>
    console.log(data)
    );
  }
}
