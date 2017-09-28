import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRooting } from './app.routing';
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRooting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
