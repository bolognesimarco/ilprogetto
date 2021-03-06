import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { MOVIES } from './mock-movies';

@Injectable()
export class MovieService {
    getMovies(): Array<Movie> {
        return MOVIES;
    }
}
