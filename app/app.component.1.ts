import { Component } from '@angular/core';
import { Movie } from './model/movie';

@Component({
  selector: 'my-app',
  templateUrl: `app/views/app.html`,
  styleUrls: ['app/styles/app.css', 'app/styles/app.colors.css']
})
export class AppComponent  { 

  onAirMovies = [
    new Movie(
      1, "Miss Peregrine - La casa dei ragazzi speciali", "app/images/misspere.jpg", "", "https://www.youtube.com/embed/wMdpP_1vm3c?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      3, "Rogue One: A Star Wars Story", "app/images/rogueone.jpg", "", "https://www.youtube.com/embed/5Be8Q2QWUMQ?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      4, "Oceania", "app/images/oceania.jpg", "", "https://www.youtube.com/embed/DZHkAx2qc-s?rel=0&amp;controls=0&amp;showinfo=0"
    )
  ];
  comingSoonMovies = [
    new Movie(
      2, "Pirati dei Caraibi - La vendetta di Salazar", "app/images/jack.jpg", "", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      5, "Guardiani della Galassia Vol. 2", "app/images/guardiani.jpg", "", "https://www.youtube.com/embed/sd-o-Com6Ko?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      6, "Spider-Man: Homecoming", "app/images/spider.jpg", "", "https://www.youtube.com/embed/rs64hwoQSiI?rel=0&amp;controls=0&amp;showinfo=0"
    ), 
    new Movie(
      7, "Pirati dei Caraibi - La vendetta di Salazar", "", "app/images/jack.jpg", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      8, "Guardiani della Galassia Vol. 2", "app/images/guardiani.jpg", "", "https://www.youtube.com/embed/sd-o-Com6Ko?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      9, "Spider-Man: Homecoming", "app/images/spider.jpg", "", "https://www.youtube.com/embed/rs64hwoQSiI?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      10, "Guardiani della Galassia Vol. 2", "app/images/guardiani.jpg", "", "https://www.youtube.com/embed/sd-o-Com6Ko?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      11, "Spider-Man: Homecoming", "app/images/spider.jpg", "", "https://www.youtube.com/embed/rs64hwoQSiI?rel=0&amp;controls=0&amp;showinfo=0"
    ), 
    new Movie(
      12, "Pirati dei Caraibi - La vendetta di Salazar", "app/images/jack.jpg", "", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      13, "Guardiani della Galassia Vol. 2", "app/images/guardiani.jpg", "", "https://www.youtube.com/embed/sd-o-Com6Ko?rel=0&amp;controls=0&amp;showinfo=0"
    ),
    new Movie(
      14, "Spider-Man: Homecoming", "app/images/spider.jpg", "", "https://www.youtube.com/embed/rs64hwoQSiI?rel=0&amp;controls=0&amp;showinfo=0"
    )
  ];

  movies = this.onAirMovies;

  public videoUrl = this.onAirMovies[0].trailer;
  public onair = true;
  public comingsoon = false;
  public goToOnAir(): void {
    this.comingsoon = false;
    this.onair = true;
    this.movies = this.onAirMovies;
    this.videoUrl = this.movies[0].trailer;
  }
  public goToComingSoon(): void {
    this.onair = false;
    this.comingsoon = true;
    this.movies = this.comingSoonMovies;
    this.videoUrl = this.movies[0].trailer;
  }

  public videoThumbnailClick(clicked: number): void {
    this.videoUrl = this.searchMovie(clicked).trailer;
  }

  private searchMovie(id: number): Movie {
    for (let index = 0; index < this.onAirMovies.length; index++) {
      let movie: Movie = this.onAirMovies[index];
      if(movie.id == id) {
        return movie;
      }
    }
    for (let index = 0; index < this.comingSoonMovies.length; index++) {
      let movie: Movie = this.comingSoonMovies[index];
      if(movie.id == id) {
        return movie;
      }
    }

    return this.onAirMovies[0];
  }

}