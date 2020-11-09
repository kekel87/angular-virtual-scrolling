import { ChangeDetectionStrategy, Component, ViewChild, AfterViewInit } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { PokemonService, Pokemon } from './pokemon.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent  {
  pokemons: Observable<Pokemon>;

  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;

  constructor(private pkmService: PokemonService) {
    this.pokemons = this.pkmService.fetchPokemons();
  }

  idTrackFn = (pokemon: Pokemon) => pokemon.number;

  currentIndex(index) {
    console.log('currentIndex', index);
  }

  gotToScrollIndex() {
    this.viewport.scrollToIndex(Math.floor(Math.random() * this.viewport.getDataLength()) + 1  );
  }
}
