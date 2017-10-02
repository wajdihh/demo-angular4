import { Component, OnInit } from '@angular/core';
import {HeroService} from "../../heroes/shared/hero.service";
import {Hero} from "../../heroes/shared/hero.model";

@Component ({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  private heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroesAsConfig().subscribe((res : Hero[])=>{
      this.heroes = res;
    });
  }
}
