import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { MoviesModule } from './movies/movies.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => DashboardModule, // import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'movies',
    loadChildren: () => MoviesModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
