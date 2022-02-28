import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
})
export class MoviesListComponent {
  @Input() movies: Movie[];

  @Output() open = new EventEmitter<Movie>();
  @Output() delete = new EventEmitter<number>();

  getMovieTitle(movie: Movie) {
    const yearsOld = new Date().getFullYear() - movie.year;
    const newTitle = `${movie.title} ${yearsOld}`;
    // console.log(newTitle);
    return newTitle;
  }
}
