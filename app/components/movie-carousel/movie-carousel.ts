import { Component } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie-carousel',
  templateUrl: `app/components/movie-carousel/movie-carousel.html`,
  styleUrls: ['app/components/movie-carousel/movie-carousel.css', 'app/styles/app.colors.css'],
  providers: [MovieService]
})
export class MovieCarousel  {

    public movies: Array<Movie> = this.movieService.getMovies();

    constructor(private movieService: MovieService) {
        this.showDivs(0);
    }
    
    public selectedIndex: number = 0;

    public plusDivs(n: number) {
        this.showDivs(this.selectedIndex += n);
    }

    public showDivs(n: number) {
        
        if (n >= this.movies.length) {
            this.selectedIndex = 0;
        } else if (n < 0) {
            this.selectedIndex = this.movies.length - 1;
        } else {
            this.selectedIndex = n;
        }
        
    }


    public getUrl(index: number) {
        if(window.innerWidth <= 1000) {
            return this.movies[index].imageV;
        } else {
            return this.movies[index].image;
        }
    }
} 