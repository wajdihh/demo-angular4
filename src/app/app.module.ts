import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRooting } from './app.routing';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import {HeroService} from "./heroes/shared/hero.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRooting
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
