import { Injectable } from '@angular/core';
import {HEROES} from '../shared/dump-hero';
import {Hero} from "./hero.model";

@Injectable()
export class HeroService {

  constructor() { }


  // instantanetlly
  getHeroes() : Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // After 2 seconds
  getHeroesSlowly() : Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()),2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
