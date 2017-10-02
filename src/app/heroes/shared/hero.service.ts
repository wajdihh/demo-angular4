import { Injectable } from '@angular/core';
import {HEROES} from '../shared/dump-hero';
import {Hero} from "./hero.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class HeroService {

  baseUrl:string = "http://test.api.partagi.tn";

  constructor(private http: HttpClient) { }


  // get
  getHeroesAsConfig() {
    return this.http.get(this.baseUrl + '/v1/others/regions');
  }
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
