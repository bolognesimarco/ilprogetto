import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { ShopItem } from './model/shop-item';
import { ItemService } from './services/item.service';
import { Movie } from './model/movie';
import { MovieService } from './services/movie.service';



@Component({
  selector: 'my-app',
  templateUrl: `app/views/app.html`,
  styleUrls: ['app/styles/app.css', 'app/styles/app.colors.css'],
  providers: [ItemService, MovieService]
})
export class AppComponent implements OnInit{


  












































  public movies: Array<Movie>;
  public showcases: Map<string, Array<ShopItem>> = new Map<string, Array<ShopItem>>();
  public showcasesKeys: Array<string> = new Array<string>();

  constructor(private itemService: ItemService, private movieService: MovieService) {
    
  }


  ngOnInit(): void {
    this.getMovies();
    this.getShowcases();
  }

  getMovies(): void {
    this.movies = this.movieService.getMovies();
  }

  getShowcases(): void {
    this.movies.forEach(m => {
      this.showcasesKeys.push(m.title);
      this.showcases.set(m.title, this.itemService.showcaseByMovie(m.id));
    });
  }

  
  
}