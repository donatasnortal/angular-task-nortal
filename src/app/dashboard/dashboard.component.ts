import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../movies/models/movie.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  search$: Observable<Movie[]>;

  search(term: string): void {}
}
