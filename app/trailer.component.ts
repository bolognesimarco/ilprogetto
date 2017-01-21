import { Component } from '@angular/core';
import { Movie } from './model/movie';

@Component({
    templateUrl: `app/views/trailer.html`,
    styleUrls: ['app/styles/app.css', 'app/styles/app.colors.css']
})
export class TrailerComponent {
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
            2, "Pirati dei Caraibi - La vendetta di Salazar", "", "app/images/jack.jpg", "https://www.youtube.com/embed/IsY-Cudzefc?rel=0&amp;controls=0&amp;showinfo=0"
        ),
        new Movie(
            5, "Guardiani della Galassia Vol. 2", "", "app/images/guardiani.jpg", "https://www.youtube.com/embed/sd-o-Com6Ko?rel=0&amp;controls=0&amp;showinfo=0"
        ),
        new Movie(
            6, "Spider-Man: Homecoming", "app/images/spider.jpg", "", "https://www.youtube.com/embed/rs64hwoQSiI?rel=0&amp;controls=0&amp;showinfo=0"
        )
    ];


    public videoUrl = this.onAirMovies[0].trailer;

    public slidding():void {
        console.log("SLIDDING!!!!!!!!!!!!!!!!!!!!1");
    }
}