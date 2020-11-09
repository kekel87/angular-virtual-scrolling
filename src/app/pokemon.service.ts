import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map, delay } from 'rxjs/operators';

const url = 'https://raw.githubusercontent.com/cheeaun/repokemon/master/data/pokemon-list.json';

export interface Pokemon {
  ThumbnailAltText: string;
  ThumbnailImage: string;
  abilities: string[];
  collectibles_slug: string,
  detailPageURL: string;
  featured:  string;
  height: number;
  id: number;
  name:  string;
  number: string;
  slug:  string;
  type: string[];
  weakness: string[];
  weight: number;
}

@Injectable()
export class PokemonService {
  constructor(private http: Http) {}

  fetchPokemons() {
    return this.http.get(url)
      .pipe(
        delay(1000),
        map((response: Response) => response.json())
      );
  }
}