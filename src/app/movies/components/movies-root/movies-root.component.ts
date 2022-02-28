import { Component, OnInit, ViewChild } from '@angular/core';
import { MovieFormComponent } from '..';
import { MovieFacade } from '../../facades/movie.facade';

import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movies-root',
  templateUrl: './movies-root.component.html',
  providers: [MovieFacade],
})
export class MoviesRootComponent {
  @ViewChild(MovieFormComponent) formComponent: MovieFormComponent;

  movies: Movie[] = [];
  selectedMovie: Movie;
  movieCount: number;

  constructor(private movieFacade: MovieFacade) {}

  ngOnInit(): void {
    this.movieFacade.movieList$.subscribe((i) => (this.movies = i));

    // this.formComponent.markDeleted(false);
  }

  open(movie: Movie) {
    this.selectedMovie = movie;
  }

  delete(id: number) {
    this.movieFacade
      .delete(id)
      .subscribe(() =>
        this.formComponent.markDeleted(id == this.selectedMovie.id)
      );
  }
}
