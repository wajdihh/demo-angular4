import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/hero.model';
import {HeroService} from '../shared/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers : [HeroService]
})

export class HeroListComponent implements OnInit {


  selectedHero : Hero;
  heroes : Hero[];


  constructor(private heroService: HeroService){

  }

  ngOnInit(): void {
   this.loadHeroes();
  }

  onSelectHero(hero: Hero) : void {
    this.selectedHero = hero;
  }

  loadHeroes() : void {
    this.heroService.getHeroesSlowly().then(promisedHeroes => this.heroes= promisedHeroes);
  }

}
