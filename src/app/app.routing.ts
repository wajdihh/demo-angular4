import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import {HeroListComponent} from "./heroes/hero-list/hero-list.component";

export const routes : Routes = [
  {
    path : 'heroes',
    component : HeroListComponent
  }
]

export const AppRooting :ModuleWithProviders = RouterModule.forRoot(routes);
