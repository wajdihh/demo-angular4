import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/hero.model';
import {HeroService} from '../shared/hero.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
 //We can put provider here like : providers : [HeroService]
})

export class HeroListComponent implements OnInit {


  selectedHero : Hero;
  heroes : Hero[];


  constructor(private router: Router,private heroService: HeroService){

  }

  ngOnInit(): void {
   this.loadHeroes();
  }

  loadHeroes() : void {
    this.heroService.getHeroesSlowly().then(promisedHeroes => this.heroes= promisedHeroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
