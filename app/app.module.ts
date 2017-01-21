import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { TrailerComponent }  from './trailer.component';
import { LogoSocial } from './components/logo-social/logo-social';
import { MovieCarousel } from './components/movie-carousel/movie-carousel';
import { Showcase } from './components/showcase/showcase';

import { SafePipe } from './helpers/safe.pipe';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   { path: '', redirectTo: 'trailers', pathMatch: 'full' },
//   { path: 'trailers', component: TrailerComponent }
// ];

@NgModule({
  imports:      [ BrowserModule ], //, RouterModule.forRoot(routes)
  declarations: [ AppComponent, SafePipe, LogoSocial, MovieCarousel, Showcase ], // TrailerComponent,
  exports: [ RouterModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
