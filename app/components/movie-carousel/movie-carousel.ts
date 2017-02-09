import { Component, Input, EventEmitter, Output, ElementRef, OnInit } from '@angular/core';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'movie-carousel',
  templateUrl: `app/components/movie-carousel/movie-carousel.html`,
  styleUrls: ['app/components/movie-carousel/movie-carousel.css', 'app/styles/app.colors.css'],
  providers: [MovieService]
})
export class MovieCarousel implements OnInit {

    public movies: Array<Movie>;
    
    constructor(private movieService: MovieService, private el: ElementRef) {
    }

    ngOnInit(): void {
        this.movies = this.movieService.getMovies();
    }


    public getUrl(index: number) {
        if(window.innerWidth <= 375) {
            return this.movies[index].imageV;
        } else {
            return this.movies[index].image;
        }
    }
    
} 