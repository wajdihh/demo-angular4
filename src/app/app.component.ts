import { Component } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './dump-hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedHero : Hero;
  heroes = HEROES;
  hero: Hero = {
    id: 1,
    name: 'Windstrom'
  };

  onSelectHero(hero: Hero) : void {
    this.selectedHero = hero;
  }
}
