import { Component, OnInit } from '@angular/core';
import {Hero} from '../shared/hero.model';
import {HEROES} from '../shared/dump-hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  ngOnInit(): void {
  }

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
