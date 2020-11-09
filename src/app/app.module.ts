import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { PokemonService } from './pokemon.service';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, DemoMaterialModule, HttpModule ],
  declarations: [ AppComponent ],
  providers:    [ PokemonService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
