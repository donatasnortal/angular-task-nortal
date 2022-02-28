import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieFacade } from '../../facades/movie.facade';

@Component({
  selector: 'app-movie-form-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [MovieFacade],
  template: `<ng-container *ngIf="movie$ | async as movie">
    <app-movie-form [movie]="movie"></app-movie-form>
  </ng-container> `,
})
export class MovieFormRootComponent {
  get movieId(): number {
    return +this.activatedRoute.snapshot.params['id'];
  }

  movie$ = this.movieFacade.getMovie(this.movieId);

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieFacade: MovieFacade
  ) {}
}
