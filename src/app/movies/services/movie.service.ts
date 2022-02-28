import { Injectable } from '@angular/core';
import { delay, map, Observable, of, tap } from 'rxjs';

import { Movie, MovieType, Serial } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService<T extends Movie> {
  private MOVIES: Movie[] = [
    { id: 1, type: 'MOVIE' as MovieType, title: 'The Godfather', year: 1972 },
    { id: 2, type: 'MOVIE' as MovieType, title: 'The Dark Knight', year: 2008 },
    { id: 3, type: 'MOVIE' as MovieType, title: 'Star Wars', year: 1977 },
    { id: 4, type: 'MOVIE' as MovieType, title: 'Avatar', year: 2009 },
    { id: 5, type: 'MOVIE' as MovieType, title: 'Twilight', year: 2008 },
    {
      id: 6,
      type: 'MOVIE' as MovieType,
      title: 'Mr. and Mrs. Smith',
      year: 2005,
    },
    { id: 7, type: 'MOVIE' as MovieType, title: 'The Hangover', year: 2009 },
    {
      id: 8,
      type: 'MOVIE' as MovieType,
      title: 'Million Dollar Baby',
      year: 2004,
    },
  ];

  private SERIALS: Serial[] = [
    {
      id: 100,
      type: 'SERIAL' as MovieType,
      title: 'House of Cards',
      year: 2013,
      seasonCount: 5,
      seriesCount: 52,
    },
    {
      id: 101,
      type: 'SERIAL' as MovieType,
      title: 'Squid Game',
      year: 2021,
      seasonCount: 1,
      seriesCount: 9,
    },
    {
      id: 103,
      type: 'SERIAL' as MovieType,
      title: 'Breaking Bad',
      year: 2008,
      seasonCount: 5,
      seriesCount: 62,
    },
  ];

  private ALL_MOVIES = [...this.MOVIES, ...this.SERIALS] as T[];

  getList(term?: string): Observable<T[]> {
    return of(this.ALL_MOVIES).pipe(
      tap(() => (term ? console.log('getList', term) : console.log('getList'))),
      map((i) =>
        !!term
          ? i.filter((x) =>
              x.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
            )
          : i
      )
    );
  }

  getMovie(id: number): Observable<T> {
    const movie = this.ALL_MOVIES.find((i) => i.id === id);
    return of(movie!).pipe(
      delay(3000),
      tap(() => console.log('getMovie', id))
    );
  }

  save(movie: T): Observable<T> {
    console.log('save movie', movie);
    if (!movie.id) {
      const newMovie = { ...movie, id: Math.floor(Math.random() * 999999) };
      this.ALL_MOVIES.push(newMovie);
      return of(newMovie);
    }
    this.ALL_MOVIES = this.ALL_MOVIES.map((i) =>
      i.id === movie.id ? { ...i, ...movie } : i
    );

    return of(movie);
  }

  delete(id: number) {
    console.log('delete movie', id);
    this.ALL_MOVIES = this.ALL_MOVIES.filter((i) => i.id !== id);
    return of(id);
  }
}
