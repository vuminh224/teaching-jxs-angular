import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PokeServiceRes} from './pokemon';

// https://angular.fr/http/client
// Implement http
@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes>{
     return this.http.get<PokeServiceRes>('https://pokeapi.co/api/v2/pokemon');
  }
}
