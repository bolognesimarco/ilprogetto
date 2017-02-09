import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
// import { TrailerComponent }  from './trailer.component';
import { LogoSocial } from './components/logo-social/logo-social';
import { MovieCarousel } from './components/movie-carousel/movie-carousel';
import { Showcase } from './components/showcase/showcase';

import { SafePipe } from './helpers/safe.pipe';
import { RouterModule, Routes } from '@angular/router';



import { MfHeaderino } from './components/mf-headerino/mf-headerino';
import { MfHeader } from './components/mf-header/mf-header';
import { MfMainMenu } from './components/mf-main-menu/mf-main-menu';
import { MfItemFilters } from './components/mf-item-filters/mf-item-filters';
import { MfItemList } from './components/mf-item-list/mf-item-list';




// const routes: Routes = [
//   { path: '', redirectTo: 'trailers', pathMatch: 'full' },
//   { path: 'trailers', component: TrailerComponent }
// ];

@NgModule({
  imports:      [ BrowserModule ], //, RouterModule.forRoot(routes)
  declarations: [ AppComponent, SafePipe, LogoSocial, MovieCarousel, Showcase, MfHeaderino, MfHeader, MfMainMenu, MfItemFilters, MfItemList ], // TrailerComponent,
  exports: [ RouterModule ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
