import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  MovieFormComponent,
  MovieFormRootComponent,
  Movies2000sComponent,
  MoviesListComponent,
  MoviesRootComponent,
} from './components';

const routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  { path: 'movie/:id', component: MovieFormRootComponent },
  { path: 'movies', component: MoviesRootComponent },
];

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieFormComponent,
    Movies2000sComponent,
    MoviesRootComponent,
    MovieFormRootComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  providers: [],
})
export class MoviesModule {}
