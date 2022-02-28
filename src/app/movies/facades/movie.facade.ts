import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs';
import { Movie, MovieType } from '../models/movie.model';

import { MovieService } from '../services/movie.service';

@Injectable()
export class MovieFacade {
  movieList$ = this.getList('', MovieType.MOVIE);
  movies2000$ = this.movieList$.pipe(
    map((i) => i.filter((j) => j.year > 2000))
  );

  constructor(private movieService: MovieService<Movie>) {}

  getList(term: string, type?: MovieType) {
    return this.movieService
      .getList(term)
      .pipe(
        map((movies) =>
          !!type ? movies.filter((i) => i.type === type) : movies
        )
      );
  }

  getMovie(id: number) {
    return this.movieService.getMovie(id);
  }

  save(movie: Movie) {
    return this.movieService.save(movie);
  }

  delete(id: number) {
    return this.movieService.delete(id);
  }
}
