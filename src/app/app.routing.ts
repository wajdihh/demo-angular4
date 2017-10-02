import {Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders } from '@angular/core';
import {HeroListComponent} from "./heroes/hero-list/hero-list.component";
import {DashboardComponent} from "./shared/dashboard/dashboard.component";
import {HeroDetailComponent} from "./heroes/hero-detail/hero-detail.component";

export const routes : Routes = [
  {
    path : 'heroes',
    component : HeroListComponent
  },
  {
    path : 'dashboard',
    component : DashboardComponent
  },
  {
    path : 'detail/:num',
    component : HeroDetailComponent
  },
  {
    path : '',
    redirectTo : '/dashboard',
    pathMatch : 'full',
  }
]

export const AppRooting :ModuleWithProviders = RouterModule.forRoot(routes);
