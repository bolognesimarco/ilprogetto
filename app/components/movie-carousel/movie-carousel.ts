import { Component } from '@angular/core';
import { Movie } from '../../model/movie'

@Component({
  selector: 'movie-carousel',
  templateUrl: `app/components/movie-carousel/movie-carousel.html`,
  styleUrls: ['app/components/movie-carousel/movie-carousel.css', 'app/styles/app.colors.css']
})
export class MovieCarousel  {

    public movies = [
        new Movie(
            1, "Miss Peregrine - La casa dei ragazzi speciali", "app/images/movies/large/misspere.jpg", "app/images/movies/small/misspere.jpg", "https://www.youtube.com/embed/wMdpP_1vm3c?rel=0&amp;controls=0&amp;showinfo=0"
        ),
        new Movie(
            3, "Rogue One: A Star Wars Story", "app/images/movies/large/rogueone.jpg", "app/images/movies/small/rogueone.jpg", "https://www.youtube.com/embed/5Be8Q2QWUMQ?rel=0&amp;controls=0&amp;showinfo=0"
        ),
        new Movie(
            4, "Oceania", "app/images/movies/large/oceania.jpg", "app/images/movies/small/oceania.jpg", "https://www.youtube.com/embed/DZHkAx2qc-s?rel=0&amp;controls=0&amp;showinfo=0"
        ), 
        new Movie(
            5, "Pirati dei Caraibi - La vendetta di Salazar", "app/images/movies/large/jack.jpg", "app/images/movies/small/jack.jpg", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
        ), 
        new Movie(
            6, "I Guardiani della Galassia - Vol. 2", "app/images/movies/large/guardiani.jpg", "app/images/movies/small/guardiani.jpg", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
        )
    ];

    constructor() {
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