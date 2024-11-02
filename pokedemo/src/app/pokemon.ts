//Q12
export interface PokeServiceRes {
  count:    number;
  next:     string;
  previous: null;
  results:  IPokemon[];
}

export interface IPokemon {
  name: string;
  url:  string;
}


export class Pokemon {
  //Q4
  //Q11
  constructor(public id: string, public name: string, public url: string) {
  }
}
